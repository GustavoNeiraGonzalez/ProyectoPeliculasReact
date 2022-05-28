const API = "https://api.themoviedb.org/3"
export function get(path){
    return fetch(API + path, {
                headers:{
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODM0MGQ0ODlhMWU0ZWIzYzliMDQ0YTEyOWIyMjQxYiIsInN1YiI6IjYyNzMzYWM3N2NmZmRhNzMxNmM1ZGQ5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.st8ZVrVOOCBDafo04RUOKIxXfy04XsHMB0DRVYAC0U0",
                    "Content-Type": "application/json;charset=utf-8",
                },
            }).then((result) => result.json())
    }