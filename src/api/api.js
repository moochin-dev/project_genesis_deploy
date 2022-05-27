const [waterBrands, setWaterBrands] = useState([]);

  useEffect(() => {
    axios.get("http://3.39.164.17:8000/waterbrand/").then((response) => {
      setWaterBrands(response.data);
    });
  }, []);