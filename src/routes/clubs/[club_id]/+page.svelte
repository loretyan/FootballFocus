<script>
    let { data } = $props();
</script>

<a href="/clubs">Back</a>

<div class="header text-center">
    <h1 class="mt-5">{data.club.name}</h1>
    <img class="logo-small" src={data.club.logo} alt="" />    
</div>

<div class="text-center">
    <a href={`/clubs/${data.club._id}/update`} class="btn btn-primary mb-4 me-3">Update Club</a>
        <form method="POST" action="?/delete" style="display: inline;">
            <input name="id" type="hidden" value={data.club._id} />
            <button class="btn btn-danger mb-4">Delete Club</button>
        </form>
        
</div>

<div class="container text-center">
    <p>Established: {data.club.yearOfEstablishment}</p>
    <p>Stadium: {data.club.stadium}</p>
</div>
<div class="container2">
    <h5 class="text-center mb-4">Squad:</h5>
    <div style="display: flex; justify-content: space-around;">
        <div>
            <p>Goalkeepers</p>
            <ul>
                {#each data.club.players.goalkeeper as player}
                    <li>{player}</li>
                {/each}
            </ul>
        </div>
        <div>
            <p>Defenders</p>
            <ul>
                {#each data.club.players.defender as player}
                    <li>{player}</li>
                {/each}
            </ul>
        </div>
        <div>
            <p>Midfielders</p>
            <ul>
                {#each data.club.players.midfielder as player}
                    <li>{player}</li>
                {/each}
            </ul>
        </div>
        <div>
            <p>Attackers</p>
            <ul>
                {#each data.club.players.attacker as player}
                    <li>{player}</li>
                {/each}
            </ul>
        </div>
    </div>
    
</div>


<style>
    .logo-small {
        transform: scale(0.8);
        margin-right: 10px;
    }
    .container {
        background-color: white;
        padding: 20px;
        border: 1px solid black;
        border-radius: 8px;
        max-width: 300px;
        margin-bottom: 30px;
    }
    .container2 {
        background-color: white;
        padding: 20px;
        border: 1px solid black;
        border-radius: 8px;
        margin: 0 auto;
        margin-left: 0;
        margin-bottom: 30px;
    }
</style>
