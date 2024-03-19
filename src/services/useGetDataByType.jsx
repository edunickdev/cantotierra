import { useState, useEffect } from "react";

// Custom hook para obtener datos de un tipo específico desde la API de Prismic
export function useGetDataByType(type, ref) {

  // Construir la consulta para obtener documentos del tipo especificado
  const query = `q=[[at(document.type,"${type}")]]`;

  // Construir la URL de la consulta a la API de Prismic
  const url = `https://canto-de-la-tierra.prismic.io/api/v2/documents/search?ref=${ref}&${query}&orderings=[document.last_publication_date%20desc]&pageSize=3`;

  // Estado para almacenar los datos obtenidos de la API
  const [data, setData] = useState([]);

  // Estado para almacenar los items procesados para mostrar
  const [items, setItems] = useState([]);

  // Estado para indicar si se están cargando los datos
  const [loading, setLoading] = useState(true);

  // Estado para almacenar errores en caso de que ocurran durante la obtención de datos
  const [error, setError] = useState(null);

  // Efecto para realizar la solicitud de datos cuando el componente se monta
  useEffect(() => {
    // Indicar que se están cargando los datos
    setLoading(true);

    // Realizar la solicitud a la API de Prismic
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Almacenar los datos obtenidos en el estado 'data'
        setData(data.results);

        // Mapear los resultados obtenidos para construir los items a mostrar
        const newItems = data.results.map((result) => ({
          id: result.id, // ID del documento
          title: result.data.title[0].text, // Título del documento
          subtitle: result.data.mytext[0].text, // Subtítulo del documento
          imageUrl: result.data.image.url, // URL de la imagen del documento
        }));

        // Almacenar los items procesados en el estado 'items'
        setItems(newItems);
      })
      .catch((error) => {
        // Almacenar errores en el estado 'error' en caso de que ocurran
        setError(error);
      })
      .finally(() => {
        // Indicar que se han completado las operaciones de carga de datos
        setLoading(false);
      });
  }, [url]); // El efecto se ejecuta solo cuando el componente se monta

  // Devolver los datos, estado de carga, errores y items procesados
  return { data, loading, error, items };
}
