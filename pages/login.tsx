import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppLayout } from '../../components/AppLayout';
import { GlitchText } from '../../components/GlitchText';
import { CyberButton } from '../../components/CyberButton';
import Image from 'next/image';

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      // Redirect ke endpoint backend Kugy AI untuk Google OAuth
      window.location.href = 'https://api.kugy.ai/auth/google';
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
    }
  };

  // Handle callback from Google OAuth
  useEffect(() => {
    const { code } = router.query;
    if (code) {
      // Kirim code ke backend untuk verifikasi
      fetch('https://api.kugy.ai/auth/google/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
      .then(res => res.json())
      .then(data => {
        // Simpan token dan user info
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/dashboard');
      })
      .catch(err => {
        console.error('Auth error:', err);
        setIsLoading(false);
      });
    }
  }, [router.query]);

  return (
    <AppLayout>
      <div className="min-h-screen pt-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </div>

        {/* Login Container */}
        <div className="relative z-10 max-w-md mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
          >
            {/* Logo */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src="/logo.png"
                  alt="MyKugy AI"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
              </motion.div>
              <GlitchText
                text="Welcome Back"
                className="text-3xl mt-4"
              />
              <p className="text-blue-400 font-futuristic mt-2">
                Login to access your AI creations
              </p>
            </div>

            {/* Google Login Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-4 rounded-xl 
                         flex items-center justify-center gap-3 transition-colors relative overflow-hidden group"
              >
                {/* Google Icon */}
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  />
                </svg>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connecting...
                  </span>
                ) : (
                  "Continue with Google"
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                              opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">or</span>
              </div>
            </div>

            {/* Email Login Form - Optional */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 
                           border border-gray-700 focus:border-blue-500 focus:ring-2 
                           focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 
                           border border-gray-700 focus:border-blue-500 focus:ring-2 
                           focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="Enter your password"
                />
              </div>

              <CyberButton
                className="w-full"
                glowColor="#3b82f6"
              >
                Login with Email
              </CyberButton>
            </motion.form>

            {/* Footer Links */}
            <div className="mt-6 text-center text-sm">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </a>
              <span className="text-gray-600 mx-2">•</span>
              <a href="/auth/register" className="text-blue-400 hover:text-blue-300 transition-colors">
                Create account
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 0],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </AppLayout>
  );
};

export default LoginPage;