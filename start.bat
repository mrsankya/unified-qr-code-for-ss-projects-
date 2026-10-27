@echo off
echo Starting local server for SAS Projects & Tech Solutions Unified Portal on port 5685...
echo Open your browser at: http://localhost:5685
start http://localhost:5685
python -m http.server 5685
pause
