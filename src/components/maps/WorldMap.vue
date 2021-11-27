<template>
    <div id="svgWorldMap"></div>
</template>

<script>
import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';

export default {
    props: {
        mapData: Object
    },
    name: 'WorldMap',
    data() {
        return  {
            
        }
    },
    mounted() {
        new svgMap(this.mapData);
        console.log(this.mapData);
    },
}
</script>