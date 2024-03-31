const url = "https://api.shecodes.io/weather/v1/current?query={Paraguay}&key={b28c06b6o901af74645t19dfb931b03a}";
const getData = async () => {
   const data = await fetch(url)
   const dataJson = await data.json()
   return dataJson
}