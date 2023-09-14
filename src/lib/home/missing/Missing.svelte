<script>
    import { childrenData } from '../../data';
   
    
</script>



    <div class="mainDiv">
        {#each childrenData as child }
            <div class="seconddiv">
                <div class="image">
                    {#if child.img}
                        <div class="missingtextdiv"><p class="missingtext">Recently Missing</p></div>
                        <img class="img" src={child.img} alt="img">
                    {:else}
                        <div class="loadingimg">
                            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                            <lottie-player src="https://lottie.host/29062c59-acf2-49ec-95f8-4a2c39f0318a/15sTleu1OZ.json" background="transeparent" speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>
                        </div>
                    {/if}        
                </div>

                <div class="details">
                    {#if child.fullName}
                        <p class="name">{child.fullName}</p>
                    {:else}
                        <div class="loadingname"></div>
                    {/if}

                    {#if child.missingDate}
                        <p class="missingdate">{child.missingDate}</p>
                    {:else}
                        <div class="loadingmissingdate"></div>
                    {/if}
                    
                </div>

                <div class="address">
                    {#if child.address}
                        <p>{child.address}</p>
                    {:else}
                        <div class="loadingaddress"></div>
                    {/if}
                    
                </div>

            </div>
        {/each}
    </div>



<style>
    .mainDiv{
    
        /* margin-bottom: 100px; */
        
    }
    .seconddiv{
        display: grid;
        grid-template-rows: 3fr 50px 50px;
        background-color: white;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid rgb(230, 230, 230);
        margin: 5px;
    }

    .img{
        border-radius: 5px;
    }

    .loadingimg{
        height: 230px;
        width: 100%;
        background-color: rgb(210, 210, 210);
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        display: grid;
        grid-template-columns: 1fr;
    }

    .loadingname{
        height: 20px;
        width: 90%;
        background-color: rgb(210, 210, 210);
    }
    .loadingmissingdate{
        height: 20px;
        background-color: rgb(210, 210, 210);
    }
    .loadingaddress{
        height: 20px;
        background-color: rgb(210, 210, 210);
    }
    lottie-player{
        align-self: center;
        justify-self: center;
    }

    .details{
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        color: #4d565b;
    }

    .missingdate{
        justify-self: end;
        font-size: 15px;
        font-weight: 500;
    }

    .name{
        font-size: 18px;
        font-weight: 500;
    }

    .address{
        font-size: 12px;
        align-self: center;
        color: gray;
        padding-left: 10px;
        padding-right: 10px;
       
        
    }

    .missingtextdiv{
        position: absolute;
        /* bottom: 230px; */
        margin-top: 12px;
        margin-left: 10px;
        background-color: white;
        padding: 5px 5px 5px 5px;
        width: 120px;
        border-radius: 5px;
        text-align: center;
        background-color: #ff5757;
    }
    .missingtext{
        font-size: 11px;
        width: 100%;
        font-weight: 600;
        color: white;
        
    }
    
</style>