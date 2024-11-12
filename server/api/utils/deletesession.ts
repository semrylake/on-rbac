import { defineEventHandler, getSession } from "h3";
import { useSessionAuth } from "@/server/utils/session";
export default defineEventHandler(async (event) => { 
     console.log(useSessionAuth);
})