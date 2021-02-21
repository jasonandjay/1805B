import { reactive } from 'vue';

export default function useGeolocation(){
    const location = reactive({coords:{}});

    navigator.geolocation.getCurrentPosition(res=>{
        location.coords = res.coords;
        console.log('location...', location);
    }, err=>{
        console.log('get err...', err);
    })

    navigator.geolocation.watchPosition(res=>{
        location.coords = res.coords;
    }, err=>{
        console.log('watch err...', err);
    })

    return {
        location
    }
}

