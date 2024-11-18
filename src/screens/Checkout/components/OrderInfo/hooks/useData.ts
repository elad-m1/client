const useData = () => {
  const paymentMethods = [
    {
      name: "הכרטיס הראשי שלי",
      methodType: "VISA Classic",
      ccNumber: "1243221245729257"
    },
    {
      name: "כרטיס התפערויות",
      methodType: "VISA Classic",
      ccNumber: "1243221245722033"
    }
  ];

  return {paymentMethods};
};

export default useData;
