<script lang="ts">
    import Section from "@lib/components/Section.svelte";
    import Nav2 from "@lib/components/Nav2.svelte";
</script>

<Nav2/>

<Section>
    <span slot="heading" class="text-[32px]">Sources Used</span>
</Section>

<Section>

    <span slot="heading" class="text-[orange]">SvelteKit</span>
    <span slot="paragraph">
        <a class="link" href="https://svelte.dev/docs/kit/introduction" target="_blank">SvelteKit</a> is a modern framework for building web applications using the Svelte language. It provides powerful routing, server-side rendering, and an optimized development experience.
    </span>
</Section>

<Section>
    <span slot="heading" class="text-sky-600">Tailwind CSS</span>
    <span slot="paragraph">
        <a class="link" href="https://tailwindcss.com/docs/installation/using-vite">Tailwind CSS</a> is a utility-first CSS framework that allows rapid UI development. It helped us maintain consistent styling and layout with minimal custom CSS.
    </span>
</Section>

<Section>
    <span slot="heading" class="text-durple">Figma</span>
    <span slot="paragraph">
        <a class="link" href="https://www.figma.com/" target="_blank">Figma</a> is a collaborative interface design tool used to prototype and visually design our project before development. It made it easy to share and iterate on ideas quickly.
    </span>
</Section>

<Section>
    <span slot="heading" class="text-[green]">ChatGPT</span>
    <span slot="paragraph">
        <a class="link" href="https://chat.openai.com/" target="_blank">ChatGPT</a> by OpenAI was used to assist with character image generation ONLY! It served as a valuable tool for productivity.
    </span>
</Section>


<Section>
    <span slot="heading" class="text-[red]">Wireframe/Flowchart</span>
    <span slot="paragraph">
      <!-- svelte-ignore a11y_missing_attribute -->
      <iframe class="w-full h-250" src="wireframe.html"></iframe>
    </span>
</Section>

<Section>
    <br><br>
    <span slot="heading" class="text-[32px]">Developer Team</span>
</Section>

<Section>
    <span slot="heading" class="text-[red]">Amaan Dhanani</span>
    <span slot="paragraph">
        I helped establish storyboard ideas, and contributed 1/2 to the storyline. I contributed to around 60-70% of the svelte pages. I helped to set up the CSS with having only 15 lines of real CSS. 
    </span>
</Section>

<Section>
    <span slot="heading" class="text-[red]">Haru Mikawa</span>
    <span slot="paragraph">
       I contributed to the majority of the slides/wireframe layout. I also helped on the code, as well as 1/2 of the story ideas. I contributed 100% on the characters. 
    </span>
</Section>