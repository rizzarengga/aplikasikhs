#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Launcher untuk Aplikasi KHS Mahasiswa
File ini akan membuka server dan browser otomatis
"""

import http.server
import socketserver
import webbrowser
import os
import socket
import threading
import time
from pathlib import Path

PORT = 8000
HOST = '127.0.0.1'

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")

def open_browser():
    """Buka browser setelah server siap"""
    time.sleep(2)  # Tunggu server siap
    url = f"http://{HOST}:{PORT}"
    webbrowser.open(url)
    print(f"🌐 Browser membuka: {url}")

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # Buka browser di thread terpisah
    browser_thread = threading.Thread(target=open_browser, daemon=True)
    browser_thread.start()
    
    with socketserver.TCPServer((HOST, PORT), MyHTTPRequestHandler) as httpd:
        print("\n" + "="*70)
        print("🚀 APLIKASI KHS MAHASISWA - LAUNCHER")
        print("="*70)
        print(f"\n✅ Server berjalan pada http://{HOST}:{PORT}")
        print(f"\n💡 Fitur:")
        print(f"   • Browser akan terbuka otomatis")
        print(f"   • Tekan Ctrl+C untuk menghentikan")
        print(f"   • Lihat PANDUAN.md untuk akses dari device lain")
        print("\n" + "="*70 + "\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n❌ Server dihentikan")
            print("="*70 + "\n")

if __name__ == "__main__":
    main()
