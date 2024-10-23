# Apuntes TanStack Query (actualización)

Hay que tener en claro que no hace peticiones HTTP, ya que su principal ayuda es optimizar esas peticiones, por ejemplo, al realizar una petición se le asigna una _key_ para saber si ya se había realizado y asi saber si los datos están actualizados o no.

- **Queries**: puede ser cualquier promesa
- **Mutations**: promesas pero que están relacionadas a modificaciones mediante POST, PUT, PATH o DELETE
- **Fresh**: la información se considera "fresca" quedando almacenada en cache el tiempo indicado en la propiedad `staleTime`, esto evita que se haga nuevamente la consulta.

**_Créditos_**

👉 [https://cursos.devtalles.com/courses/tanstack-query](https://cursos.devtalles.com/courses/tanstack-query)
