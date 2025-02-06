export default function Cancel() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-HelveticaBold text-red-600">Payment Canceled!</h1>
        <p className="text-primary1 font-Inter400 text-2xl">Your payment was not processed.</p>
      </div>
    );
  }