const Policy = () => {
  return (
    <main className="flex min-h-screen flex-col items-start  p-8 sm:p-24 space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
        Privacy and Policies
      </h1>
      <div className=" space-y-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl">
          Introduction
        </h1>
        <p className="text-muted-foreground">
          Welcome to Karamsetu Foundation's website! This privacy policy
          explains how we collect, use, and protect your personal information.
          By using our website, you agree to the terms outlined below.
        </p>
      </div>
      <div className="space-x-8 space-y-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl">
          Types of data collected
        </h1>
        <ul className=" list-decimal">
          <li className="font-medium">Personal Information:</li>
          <p className="text-sm text-muted-foreground">
            {" "}
            - Names, email addresses, phone numbers (collected through forms or
            direct communication). - Donor information for processing donations.
          </p>
          <li className="font-medium">Non-Personal Data:</li>
          <p className="text-sm text-muted-foreground">
            {" "}
            - IP addresses, browser type, device information (collected
            automatically through cookies and analytics tools).
          </p>
        </ul>
      </div>
      <div className=" space-y-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl">
          Data Collection Methods
        </h1>
        <p className="font-medium">We collect data through:</p>
        <ul className=" list-disc px-8">
          <li>Contact forms</li>
          <li>Newsletter sign-ups</li>
          <li>Cookies (for website functionality and analytics)</li>
        </ul>
      </div>
      <div className=" space-y-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl">
          Use of Data
        </h1>
        <p className="font-medium">
          We use collected data for the following purposes:
        </p>
        <ul className=" list-disc px-8">
          <li>Communication with users</li>
          <li>Processing donations</li>
          <li>Improving our website and services</li>
          <li>Analytics (to understand user behavior)</li>
        </ul>
      </div>
      <div className=" space-y-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl">
          Data Sharing
        </h1>
        <p className="font-medium">
          We do not sell or rent your personal information. However, we may
          share data with:
        </p>
        <ul className=" list-disc px-8">
          <li>Service providers (e.g., payment processors)</li>
          <li>Partners (for joint initiatives)</li>
        </ul>
      </div>
      <div className=" space-y-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl">
          Cookies and Tracking
        </h1>
        <p className="font-medium">Our website uses cookies for:</p>
        <ul className=" list-disc px-8">
          <li>Session management</li>
          <li>Analytics (Google Analytics, etc.)</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          You can manage cookie preferences in your browser settings.
        </p>
      </div>
      <div className=" space-y-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl">
          Security Measures
        </h1>
        <p className="font-medium">We take security seriously:</p>
        <ul className=" list-disc px-8">
          <li>Data encryption</li>
          <li>Secure servers</li>
          <li>Regular security audits</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Remember that no method is 100% secure.
        </p>
      </div>
      <div className=" space-y-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl">
          User Rights
        </h1>
        <p className="font-medium">You have the right to:</p>
        <ul className=" list-disc px-8">
          <li>Access your data</li>
          <li>Correct inaccuracies</li>
          <li>Request deletion</li>
        </ul>
      </div>
      <div className=" space-y-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl">
          Updates and Changes
        </h1>
        <p className="text-muted-foreground">
          We may update this policy. Check our website for the latest version.
        </p>
      </div>
      <div className=" space-y-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl">
          Contact Information
        </h1>
        <p className="text-muted-foreground">
          For privacy-related inquiries, contact us at{" "}
          <a href="mailto:karamsetufoundation@gmail.com" className=" text-blue-800 font-medium">
            karamsetufoundation@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
};

export default Policy;
