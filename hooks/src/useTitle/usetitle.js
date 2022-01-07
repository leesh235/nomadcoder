export const useTitle = (initailTitle) => {
    const [title, setTitle] = useState(initailTitle);
    const updateTitle = () => {
      const htmlTtitle = document.querySelector("title");
      htmlTtitle.innerText = title;
    };
    useEffect(updateTitle, [title])
    return setTitle;
  };