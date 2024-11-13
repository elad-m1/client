import {useState} from "react";

/**
 * Custom hook to manage selected barber and services.
 *
 * @returns {Object} An object containing:
 * - selectedBarber: The currently selected barber or null.
 * - selectedServices: An array of selected services.
 * - handleBarberSelect: Function to set the selected barber.
 * - handleServiceSelect: Function to toggle a service in the selected services.
 */
const useData = () => {
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleBarberSelect = (barber: string) => {
    setSelectedBarber(barber);
  };

  const handleServiceSelect = (service: string) => {
    if (selectedServices.includes(service))
      setSelectedServices(selectedServices.filter(s => s !== service));
    else setSelectedServices([...selectedServices, service]);
  };

  return {
    selectedBarber,
    selectedServices,
    handleBarberSelect,
    handleServiceSelect
  };
};

export default useData;
