export default async function deleteMovie( movieId :number ) {
    const res = await fetch(`http://localhost:9090/movieList/${ movieId }`, {
        method: "DELETE"
    })
}