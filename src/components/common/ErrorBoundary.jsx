import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service here
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
          <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 text-center border border-gray-100 relative overflow-hidden">
            {/* Decorative background gradients */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-50"></div>

            {/* Icon */}
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-extrabold text-gray-800 mb-2">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              An unexpected error occurred and this page is temporarily unavailable. Don't worry, you can try reloading or heading back home.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2.5 rounded-lg transition duration-200 shadow-md"
              >
                Reload Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-2.5 rounded-lg transition duration-200"
              >
                Go to Homepage
              </button>
            </div>
            
            {this.state.error && (
              <details className="mt-6 text-left bg-gray-50 p-3 rounded-lg border text-xs text-gray-500 max-h-32 overflow-auto">
                <summary className="font-semibold cursor-pointer select-none mb-1">View details</summary>
                <code className="block whitespace-pre-wrap">{this.state.error.toString()}</code>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
