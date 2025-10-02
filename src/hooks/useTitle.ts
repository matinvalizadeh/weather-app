import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | اپلیکیشن آب و هوا`;
  }, [title]);
};

export default useTitle;
