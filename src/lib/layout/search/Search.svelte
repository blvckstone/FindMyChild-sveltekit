<div class="mainDiv">
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium  sr-only ">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 searchlogo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm dark:placeholder-grey-100  text-gray-900 border border-gray-300 rounded-lg  focus:border-blue-500   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search missing person" required>
    </div>
</form>
</div>

<style>
    .mainDiv{
        margin: 5px 5px 5px 5px;
        position: sticky;
        top: 5px;
        z-index: 100;
    }

    #default-search{
        background-color: #3c3c3c;
       border: none;
       color: white;
    }

    #default-search::placeholder, .searchlogo {
        color: rgb(151, 151, 151); /* Semi-transparent blue placeholder text */
    }


    #default-search:focus{
        outline: none;
        background-color: #5c5c5c;
        color: rgb(255, 255, 255);
    }
</style>