<script lang="ts">
    import "$lib/css/app.css";
    import Footer from "@lib/components/Footer.svelte";

    const {children} = $props();
</script>

{@render children?.()}



<Footer/>



