
import Vitrine from '../../components/Vitrine/Vitrine';
import './ProjectsPage.css'
import cptImg from '../../assets/pictures/CompteurProject.png';
import githubImgWhite from '../../assets/pictures/github-mark-white.png';
import githubImgBlack from '../../assets/pictures/github-mark.png';
import TagInput from '../../components/TagInput/TagInput';
import { useEffect, useState } from 'react';


//Norm Funct
const NormText = (text) => {
    const resultText = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
    return resultText
}

const GithubRepo = ({tags}) => {
    const [repos, setRepos] = useState([]);
    const [isLoad, setLoad] = useState(false);

    const AllLanguages = new Set();


    //Get all repos 
    const fetchRepos = async () => {
        try {
          const requestRepo = await fetch('https://api.github.com/users/tdhssy/repos');
          if (!requestRepo.ok) {
            throw new Error('Failed to fetch repos');
          }
          return await requestRepo.json();

        } catch (error) {
          console.error('Erreur repos', error);
          return [];
        }
      };
      
      //Get project languages
      const fetchLanguages = async (repo) => {
        try {
          const requestLang = await fetch(repo.languages_url);
          if (!requestLang.ok) {
            throw new Error();
          }
          const data = await requestLang.json();
          return Object.keys(data)

        } catch (error) {
          console.error('Erreur language', error);
          return repo;
        }
      };
      
      //Build data ready to use
      const RepoUser = async () => {
        const repos = await fetchRepos();
      
        const languagesPromises = repos.map(async (repo) => {
            const langData = await fetchLanguages(repo);
   
            //Save all languages
            langData.forEach((lang) => {
                AllLanguages.add(lang);
            })

            //Norm languages
            const langDataNorm = langData.map((lang)=>(
                NormText(lang)
            ))

            return { ...repo, languages: langDataNorm };
        });
      
        const reposLanguages = await Promise.all(languagesPromises);
        
        
        return reposLanguages;
      };


    useEffect(()=>{
        const loadData = async () => {
            const repos = await RepoUser();
            setRepos(repos);
            setLoad(true);
          };
      
          loadData();
          
    }, []);
    
    //Filter project selected
    const filteredRepos = repos.filter((repo) => {
        if (tags.length !==0){
            const repoName = NormText(repo.name);
            const repoLang = repo.languages;
            return tags.some((tag) => repoLang.includes(tag) || repoName===tag);
        }else{
            return true
        }
        
    })

    

    return (
        <>
            {
                filteredRepos.length!==0 ? (
                    filteredRepos.map((repo) => (
                        <Vitrine key={repo.id} Img={githubImgWhite} Title={repo.name} Link={repo.html_url} />
                    ))
                 ) : (
                    <p></p>
                )
                
            }
            
        </>
    );
    

}





export function ProjectsPages() {

    //tag get by TagInput
    const [tags, setTags] = useState([]);
    const handleFilterTags = (newTags) => {
        setTags(newTags);
    };

    return ( 
        <>
            <div className="background"/>
            <TagInput onTagsChange={handleFilterTags}/>
            <nav className='vitrineGrid'>
                <GithubRepo tags={tags}/>
                <Vitrine Img={cptImg} Title={'Compteur'} Link={'Countdown'}/>
            </nav>
            
        </>
    );
}