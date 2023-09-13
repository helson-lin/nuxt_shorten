<template>
    <div
        class="url-input relative flex flex-row items-center shadow-md py-1 pr-2 focus:shadow-inner w-max max-w-full rounded-xl">
        <div class="btn absolute left-0 top-1/2 -translate-y-1/2 ">
            <svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M26.2401 16.373L17.1001 7.23303C14.4388 4.57168 10.0653 4.6303 7.33158 7.36397C4.59791 10.0976 4.53929 14.4712 7.20064 17.1325L15.1359 25.0678"
                    stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M32.9027 23.0031L40.838 30.9384C43.4994 33.5998 43.4407 37.9733 40.7071 40.707C37.9734 43.4407 33.5999 43.4993 30.9385 40.8379L21.7985 31.6979"
                    stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.1093 26.1416C28.843 23.4079 28.9016 19.0344 26.2403 16.373" stroke="#333" stroke-width="4"
                stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.7989 21.7984C19.0652 24.5321 19.0066 28.9056 21.6679 31.5669" stroke="#333" stroke-width="4"
                stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
    <input type="url"
        class="w-px h-10 pr-12 pl-10 outline-none placeholder:italic placeholder:text-slate-400 placeholder:text-sm focus:outline-slate-950 "
        style="width: 400px;" placeholder="Shorten your link">
    <div class="btn border-slate-300 border hover:bg-gray-100 absolute right-2 top-1/2 -translate-y-1/2 ">
        <svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9998 8L6 14L12.9998 21" stroke="#333" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
            <path
                d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"
                stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
</div>
</template>