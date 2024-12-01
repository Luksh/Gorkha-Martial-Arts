// src/components/MembershipPage.js
const MembershipPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Membership Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold">Basic Plan</h2>
          <p>£25.00 / month</p>
          <p>1 martial art, 2 sessions per week</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold">Intermediate Plan</h2>
          <p>£35.00 / month</p>
          <p>1 martial art, 3 sessions per week</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold">Advanced Plan</h2>
          <p>£45.00 / month</p>
          <p>2 martial arts, 5 sessions per week</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold">Elite Plan</h2>
          <p>£60.00 / month</p>
          <p>Unlimited martial arts sessions</p>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
