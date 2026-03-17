import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-slate-400 py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Anshu Shee. All rights reserved.</p>
                <div className="flex gap-6 items-center">
                    <a href="https://github.com/AnshuShee" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity flex items-center">
                        <Github size={20} className="hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.linkedin.com/in/anshu-shee-3119183a0/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjMGE2NmMyIiByeD0iNjAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTg0LjcxNSAyMTcuNjg1aDI5LjI3YTQgNCAwIDAgMCA0LTMuOTk5bC4wMTUtNjEuODQyYzAtMzIuMzIzLTYuOTY1LTU3LjE2OC00NC43MzgtNTcuMTY4Yy0xNC4zNTktLjUzNC0yNy45IDYuODY4LTM1LjIwNyAxOS4yMjhhLjMyLjMyIDAgMCAxLS41OTUtLjE2MVYxMDEuNjZhNCA0IDAgMCAwLTQtNGgtMjcuNzc3YTQgNCAwIDAgMCA0IDR2MTEyLjAyYTQgNCAwIDAgMCA0IDRoMjkuMjY4YTQgNCAwIDAgMCA0LTR2LTU1LjM3M2MwLTE1LjY1NyAyLjk3LTMwLjgyIDIyLjM4MS0zMC44MmMxOS4xMzUgMCAxOS4zODMgMTcuOTE2IDE5LjM4MyAzMS44MzR2NTQuMzY0YTQgNCAwIDAgMCA0IDRNMzggNTkuNjI4YzAgMTEuODY0IDkuNzY3IDIxLjYyNiAyMS42MzIgMjEuNjI2YzExLjg2Mi0uMDAxIDIxLjYyMy05Ljc2OSAyMS42MjMtMjEuNjMxQzgxLjI1MyA0Ny43NjEgNzEuNDkxIDM4IDU5LjYyOCAzOEM0Ny43NjIgMzggMzggNDcuNzYzIDM4IDU5LjYyN202Ljk1OSAxNTguMDU4aDI5LjMwN2E0IDQgMCAwIDAgNC00VjEwMS42NmE0IDQgMCAwIDAtNC00SDQ0Ljk1OWE0IDQgMCAwIDAtNCA0djExMi4wMjVhNCA0IDAgMCAwIDQgNCIvPjwvZz48L3N2Zz4=" alt="LinkedIn" className="w-5 h-5 rounded hover:scale-110 transition-transform" />
                    </a>
                    <a href="mailto:anshu.shee.cg@gmail.com" className="hover:opacity-80 transition-opacity flex items-center">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjZjRmMmVkIiByeD0iNjAiLz48cGF0aCBmaWxsPSIjNDI4NWY0IiBkPSJNNDEuNjM2IDIwMy4wMzloMzEuODE4di03Ny4yNzNMMjggOTEuNjc2djk3LjcyN2MwIDcuNTQ1IDYuMTE0IDEzLjYzNiAxMy42MzYgMTMuNjM2Ii8+PHBhdGggZmlsbD0iIzM0YTg1MyIgZD0iTTE4Mi41NDUgMjAzLjAzOWgzMS44MTljNy41NDUgMCAxMy42MzYtNi4xMTQgMTMuNjM2LTEzLjYzNlY5MS42NzVsLTQ1LjQ1NSAzNC4wOTEiLz48cGF0aCBmaWxsPSIjZmJiYzA0IiBkPSJNMTgyLjU0NSA2Ni42NzV2NTkuMDkxTDIyOCA5MS42NzZWNzMuNDkyYzAtMTYuODYzLTE5LjI1LTI2LjQ3Ny0zMi43MjctMTYuMzYzIi8+PHBhdGggZmlsbD0iI2VhNDMzNSIgZD0iTTczLjQ1NSAxMjUuNzY2di01OS4wOUwxMjggMTA3LjU4M2w1NC41NDUtNDAuOTA5djU5LjA5MUwxMjggMTY2LjY3NSIvPjxwYXRoIGZpbGw9IiNjNTIyMWYiIGQ9Ik0yOCA3My40OTN2MTguMTgybDQ1LjQ1NCAzNC4wOTF2LTU5LjA5TDYwLjcyNyA1Ny4xM0M0Ny4yMjcgNDcuMDE2IDI4IDU2LjYzIDI4IDczLjQ5MyIvPjwvZz48L3N2Zz4=" alt="Gmail" className="w-5 h-5 rounded hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
