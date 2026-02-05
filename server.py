#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Server untuk Aplikasi KHS Mahasiswa
Jalankan file ini untuk membuat aplikasi dapat diakses oleh orang lain
"""

import http.server
import socketserver
import webbrowser
import os
import socket
from pathlib import Path

# Konfigurasi
PORT = 8000
HOST = '0.0.0.0'

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Tambahkan header untuk mencegah cache
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def do_GET(self):
        # Redirect root ke index.html
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()
    
    def log_message(self, format, *args):
        # Tampilkan log akses
        print(f"[{self.log_date_time_string()}] {format % args}")

def get_local_ip():
    """Dapatkan IP lokal komputer"""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "localhost"

def main():
    # Ubah ke direktori script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # Buat server
    with socketserver.TCPServer((HOST, PORT), MyHTTPRequestHandler) as httpd:
        local_ip = get_local_ip()
        
        print("\n" + "="*70)
        print("🚀 APLIKASI KHS MAHASISWA - SERVER BERJALAN")
        print("="*70)
        print(f"\n✅ Server berhasil dijalankan pada port {PORT}")
        print(f"\n📱 Akses lokal (dari komputer ini):")
        print(f"   → http://localhost:{PORT}")
        print(f"   → http://127.0.0.1:{PORT}")
        print(f"\n🌐 Akses dari komputer/device lain (di jaringan yang sama):")
        print(f"   → http://{local_ip}:{PORT}")
        print(f"\n📝 Contoh Login:")
        print(f"   Nama: Ahmad Fauzi")
        print(f"   NIM: 231001")
        print(f"\n💡 Tips Berbagi Akses:")
        print(f"   1. Bagikan URL ke orang lain: http://{local_ip}:{PORT}")
        print(f"   2. Pastikan device mereka terhubung ke jaringan yang sama")
        print(f"   3. Server ini hanya bisa diakses selama program berjalan")
        print(f"   4. Tekan Ctrl+C untuk menghentikan server")
        print("\n" + "="*70)
        print(f"\n⏳ Server berjalan... (tekan Ctrl+C untuk menghentikan)\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n❌ Server dihentikan oleh pengguna")
            print("="*70 + "\n")

if __name__ == "__main__":
    main()
