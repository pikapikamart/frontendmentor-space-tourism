
export async function fetchSpaceData<Type>(path: string){
  const spaceData = await fetch("https://my-json-server.typicode.com/pikamart/jsonserver/db");
  const jsonSpaceData = await spaceData.json();
  const specificData: Type[] = jsonSpaceData[path as keyof typeof jsonSpaceData]
  
  return specificData;
}

export function preloadImages<Type>(path: Type[]) {
  path.map(( pathData: {} )  =>{
    const images = pathData["images" as keyof typeof pathData];
    Object.keys(images).forEach(imgKey =>{
      const image = new Image();
      image.src = images[imgKey as keyof typeof images];
    })
  })
}