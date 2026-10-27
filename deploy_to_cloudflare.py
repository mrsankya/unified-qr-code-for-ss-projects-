import os
import sys
import subprocess
import time
import urllib.request
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8')

PROJECT_DIR = Path(__file__).resolve().parent
PROJECT_NAME = os.environ.get("CF_PAGES_PROJECT", "ss-projects")

ENV = os.environ.copy()
ENV["CLOUDFLARE_ACCOUNT_ID"] = "0fbadd932cb4ec64fe049a68da13c315"
ENV["NODE_OPTIONS"] = "--dns-result-order=ipv4first"

def log(msg):
    print(msg, flush=True)

def run_cmd(cmd, cwd):
    log(f"  > Running: {' '.join(cmd)} in {cwd}")
    proc = subprocess.run(
        cmd,
        cwd=cwd,
        env=ENV,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding='utf-8',
        errors='replace'
    )
    for line in proc.stdout.splitlines():
        if line.strip():
            log(f"    {line}")
    return proc.returncode == 0, proc.stdout

def deploy():
    log(f"[*] Deploying {PROJECT_NAME} to Cloudflare Pages...")
    
    # 1. Ensure project exists
    create_cmd = [
        "cmd.exe", "/c", "npx", "wrangler", "pages", "project", "create",
        PROJECT_NAME, "--production-branch", "main", "--force"
    ]
    log("[1/2] Creating/verifying Cloudflare Pages project...")
    success, out = run_cmd(create_cmd, str(PROJECT_DIR))
    
    time.sleep(2)
    
    # 2. Deploy directory
    deploy_cmd = [
        "cmd.exe", "/c", "npx", "wrangler", "pages", "deploy",
        ".", "--project-name", PROJECT_NAME, "--branch", "main"
    ]
    log("[2/2] Uploading and deploying files to Cloudflare Pages...")
    success, out = run_cmd(deploy_cmd, str(PROJECT_DIR))
    
    live_url = f"https://{PROJECT_NAME}.pages.dev"
    if success:
        log(f"\n[✓] DEPLOYMENT SUCCESSFUL!")
        log(f"[✓] Live Public URL: {live_url}")
        
        # Verify
        time.sleep(3)
        try:
            req = urllib.request.Request(live_url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=15) as resp:
                log(f"[✓] Live Status Code: {resp.status} OK!")
        except Exception as e:
            log(f"[!] Warning on verification: {e}")
            
        return live_url
    else:
        log(f"[X] Deployment failed!")
        return None

if __name__ == "__main__":
    deploy()
