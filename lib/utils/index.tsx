import { SpaceDataShape } from "../typings";


export const fetchSpaceData = async(path: string) =>{
  const spaceData = await fetch("https://my-json-server.typicode.com/pikamart/jsonserver/db");
  const jsonSpaceData: SpaceDataShape = await spaceData.json();
  
  return jsonSpaceData[path as keyof typeof jsonSpaceData];
}