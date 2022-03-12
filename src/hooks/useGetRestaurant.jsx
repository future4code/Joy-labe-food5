import axios from 'axios'
import { useState, useEffect } from 'react'

export function useGetRestaurant(url){
    const [data, setData] = useState([])

    useEffect(() =>{

        const header = {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlVnbjZSQ0ZtUmIwWGp0enpMWkVQIiwibmFtZSI6InRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJjcGYiOiIyMjIuMjIyLjExMS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NDUxNDA4NzF9.mry6eeJ0mOZNiR11Q_zXQYoiCY-s7bM523LGKu2vN74"
            }
        }


        axios
            .get(url, header)
            .then(response => {
                setData(response.data.restaurants);
            })
            .catch(err => {
                console.log(err);
            });
    },[url])

    return [data]
}