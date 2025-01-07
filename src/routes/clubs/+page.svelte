<script>
    let { data } = $props();
    import ClubCard from "$lib/components/ClubCard.svelte";
    import AddClubButton from "$lib/components/AddClubButton.svelte";
    import { on } from "svelte/events";
</script>

<main class="container text-center mt-5">
    <h1>Most popular Clubs</h1>
    <AddClubButton />
</main>
<p><i>Pictures from transfermarkt.ch</i></p>
<div class="spacer"></div>
<div class="row">
    {#each data.clubs as club}
        <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
            <ClubCard {club}></ClubCard>
        </div>
    {/each}
</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
    }
    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
</style>
