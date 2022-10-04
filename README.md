<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

<br />
<div>
<h3 align="center" style="font-weight:900; font-size:2rem;">Movies Series Anime Info</h3>

<p align="center">
    a website where you can find trailers and information (videos, photos, watch providers and more!) about your favorite movies, series, and anime
    <br />
    <br />
    <a href="https://movies-series-anime-info.vercel.app/">View Website</a>
  </p>
  <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap:1rem; justify-content:center;">
  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/05377d82-3f4f-4cc7-ba21-9f08c6d7e873/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T171515Z&X-Amz-Expires=86400&X-Amz-Signature=a0b977c2b491f1bf89263f7cc6d21307d558aac0ec2bd8abf4a95fa0c645244d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" width="400" height="100%">
  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/df19da93-6ffe-4875-a066-768ad7667c16/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T170642Z&X-Amz-Expires=86400&X-Amz-Signature=05f846a223e375e5a6706f141aebc48a3aa425d341579e921ceedecaccd28dde&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" width="400">

</div>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<!-- ABOUT THE PROJECT -->

## About The Project

Since I enjoy watching a lot of things, I decided to create and share this hobby project, where you can find information about movies, series, and anime, latest trailers, watching providers and other relevant information.<br/>
This website is far from finnished, some of the things I plan to add are in the <a href="#roadmap">Roadmap</a> part.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [![Next][next.js]][next-url]
-   [![React][react.js]][react-url]
-   [![tailwind-url]][tailwind]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

If you wish to get a local copy up and running follow these steps.

### Prerequisites

You only need `npm` installed on your machine to run this project.<br/>
If you want to install npm follow this [guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation

1. Get a free API Key at https://www.themoviedb.org/documentation/api
2. Clone the repo
    ```sh
    git clone https://github.com/benali-chadi/Movies-Series-Anime-Info.git
    ```
3. Install NPM packages
    ```sh
    npm install
    ```
4. Create a `.env.local` file
5. Enter the following in `.env.local`, and change `<API key>` with your API key

    ```json
    TMDB_KEY=<API key>
    TMDB_URL="https://api.themoviedb.org/3/"
    KITSU_URL="https://kitsu.io/api/edge/"
    JIKAN_URL="https://api.jikan.moe/v4/"

    NEXT_PUBLIC_JIKAN_URL="https://api.jikan.moe/v4/"
    NEXT_PUBLIC_TMDB_URL="https://api.themoviedb.org/3/"
    NEXT_PUBLIC_TMDB_KEY=<API key>
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [ ] The anime part still has Issues
-   [ ] Cast and Crew Page
-   [ ] Specific Person Page (cast, crew or anime character)
-   [ ] Pages for (in Tv Show or Anime)
    -   [ ] Seasons
    -   [ ] Specific Episodes

See the [open issues](https://github.com/benali-chadi/Movies-Series-Anime-Info/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

linkedIn: https://www.linkedin.com/in/chadi-benali/

email: benalioulhajchadi@gmail.com

Project Link: https://github.com/benali-chadi/Movies-Series-Anime-Info

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [TMDB](https://www.themoviedb.org/)
-   [JIKAN](https://jikan.moe/)
-   [Vercel](https://vercel.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/benali-chadi/Movies-Series-Anime-Info.svg?style=for-the-badge
[license-url]: https://github.com/benali-chadi/Movies-Series-Anime-Info/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/chadi-benali/
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[tailwind]: https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg
[tailwind-url]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white/
