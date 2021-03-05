import React, { useState, useEffect } from 'react';
import { ReactComponent as ReactLogo } from './svg/react.svg'
import { ReactComponent as JavascriptLogo } from './svg/javascript.svg'
import { ReactComponent as HTMLLogo } from './svg/html.svg'
import { ReactComponent as CSSLogo } from './svg/css.svg'
import { ReactComponent as SQLLogo } from './svg/sql.svg'
import { ReactComponent as GraphQLLogo } from './svg/graphql.svg'
import { ReactComponent as CppLogo } from './svg/cpp.svg'
import { ReactComponent as PythonLogo } from './svg/python.svg'
import { ReactComponent as JQueryLogo } from './svg/jquery.svg'
import { ReactComponent as HighchartsLogo } from './svg/highcharts.svg'
import { ReactComponent as GulpLogo } from './svg/gulp.svg'
import { ReactComponent as JiraLogo } from './svg/jira.svg'
import { ReactComponent as ConfluenceLogo } from './svg/confluence.svg'
import { ReactComponent as GithubLogo } from './svg/github.svg'
import { ReactComponent as GitLogo } from './svg/git.svg'
import { ReactComponent as ExpressLogo } from './svg/express.svg'
import { ReactComponent as AzureLogo } from './svg/azure.svg'
import { ReactComponent as AWSLogo } from './svg/aws.svg'
import { ReactComponent as DockerLogo } from './svg/docker.svg'
import { ReactComponent as WordpressLogo } from './svg/wordpress.svg'
import { ReactComponent as MySQLLogo } from './svg/mysql.svg'
import { ReactComponent as PHPLogo } from './svg/php.svg'
import { ReactComponent as BootstrapLogo } from './svg/bootstrap.svg'
import { ReactComponent as HostingerLogo } from './svg/hostinger.svg'
import { ReactComponent as CPanelLogo } from './svg/cpanel.svg'
import { ReactComponent as HerokuLogo } from './svg/heroku.svg'
import { ReactComponent as MongoLogo } from './svg/mongodb.svg'
import { ReactComponent as NodeLogo } from './svg/nodejs.svg'
import { ReactComponent as SassLogo } from './svg/sass.svg'

import ReactTooltip from 'react-tooltip';


const mobileSize = window.matchMedia('(min-width: 200px)');

const styles = {
  container: isRowBased => ({
    display: 'flex',
    flexDirection: isRowBased ? 'row' : 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%'
  }),
  img: isRowBased => ({
    width:'11%',
    margin: '3%',
    height: isRowBased ? '100px' : '70px'
  })
}


const TechStack = () => {  
const [matches, setMatches] = useState(mobileSize.matches);
  // useEffect(() => {
  //   const handler = e => setMatches(e.matches);
  //   mobileSize.addListener(handler);
  //   return () => mobileSize.removeListener(handler);
  // });
    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">
            <p id="skills_head">SKILLS</p>
            <h1 className="skills_ind_head">LANGUAGES</h1>
            <div className="skill_pieces" style={styles.container(matches)}>
              <JavascriptLogo data-tip data-for="jstip" style={styles.img(matches)} className="stack-logo"/>
              <HTMLLogo data-tip data-for="htmltip" style={styles.img(matches)} className="stack-logo"/>
              <CSSLogo data-tip data-for="csstip" style={styles.img(matches)} className="stack-logo"/>
              <SQLLogo data-tip data-for="sqltip" style={styles.img(matches)} className="stack-logo"/>
              <CppLogo data-tip data-for="cpptip" style={styles.img(matches)} className="stack-logo"/>
              <GraphQLLogo data-tip data-for="graphqltip" style={styles.img(matches)} className="stack-logo"/>
              <SassLogo data-tip data-for="sasstip" style={styles.img(matches)} className="stack-logo"/>
              <PythonLogo data-tip data-for="pythontip" style={styles.img(matches)} className="stack-logo"/>
            </div>

            <h1 className="skills_ind_head">JS LIBRARIES &amp; FRAMEWORKS</h1>
            <div className="skill_pieces" style={styles.container(matches)}>
              <ReactLogo data-tip data-for="reacttip" style={styles.img(matches)} className="stack-logo"/>
              <JQueryLogo data-tip data-for="jquerytip" style={styles.img(matches)} className="stack-logo"/>
              <BootstrapLogo data-tip data-for="bootstraptip" style={styles.img(matches)} className="stack-logo"/>
              <HighchartsLogo data-tip data-for="highchartstip" style={styles.img(matches)} className="stack-logo"/>
              <GulpLogo data-tip data-for="gulptip" style={styles.img(matches)} className="stack-logo"/>
            </div>

            <h1 className="skills_ind_head">TOOLS</h1>
            <div className="skill_pieces" style={styles.container(matches)}>
              <JiraLogo data-tip data-for="jiratip" style={styles.img(matches)} className="stack-logo"/>
              <ConfluenceLogo data-tip data-for="confluencetip" style={styles.img(matches)} className="stack-logo"/>
              <GitLogo data-tip data-for="gittip" style={styles.img(matches)} className="stack-logo"/>
              <GithubLogo data-tip data-for="githubtip" style={styles.img(matches)} className="stack-logo"/>
              <AzureLogo data-tip data-for="azuretip" style={styles.img(matches)} className="stack-logo"/>
              <AWSLogo data-tip data-for="awstip" style={styles.img(matches)} className="stack-logo"/>
              <WordpressLogo data-tip data-for="wordpresstip" style={styles.img(matches)} className="stack-logo"/>
              <DockerLogo data-tip data-for="dockertip" style={styles.img(matches)} className="stack-logo"/>
            </div>

            <h1 className="skills_ind_head">DB, BACK-END &amp; HOSTING</h1>
            <div className="skill_pieces" style={styles.container(matches)}>
              <MongoLogo data-tip data-for="mongotip" style={styles.img(matches)} className="stack-logo"/>
              <NodeLogo data-tip data-for="nodetip" style={styles.img(matches)} className="stack-logo"/>
              <ExpressLogo data-tip data-for="expresstip" style={styles.img(matches)} className="stack-logo"/>
              <MySQLLogo data-tip data-for="mysqltip" style={styles.img(matches)} className="stack-logo"/>
              <PHPLogo data-tip data-for="phptip" style={styles.img(matches)} className="stack-logo"/>
              <HostingerLogo data-tip data-for="hostingertip" style={styles.img(matches)} className="stack-logo"/>
              <HerokuLogo data-tip data-for="herokutip" style={styles.img(matches)} className="stack-logo"/>
              <CPanelLogo data-tip data-for="cpaneltip" style={styles.img(matches)} className="stack-logo"/>
            </div>
          </div>
        </div>  

        <ReactTooltip id='jstip' effect="float" place="bottom"><span>JavaScript</span></ReactTooltip>
        <ReactTooltip id='htmltip' effect="float" place="bottom"><span>HTML5</span></ReactTooltip>
        <ReactTooltip id='csstip' effect="float" place="bottom"><span>CSS3</span></ReactTooltip>
        <ReactTooltip id='sqltip' effect="float" place="bottom"><span>SQL</span></ReactTooltip>
        <ReactTooltip id='cpptip' effect="float" place="bottom"><span>C++</span></ReactTooltip>
        <ReactTooltip id='graphqltip' effect="float" place="bottom"><span>GraphQL</span></ReactTooltip>
        <ReactTooltip id='sasstip' effect="float" place="bottom"><span>Sass</span></ReactTooltip>
        <ReactTooltip id='pythontip' effect="float" place="bottom"><span>Python</span></ReactTooltip>

        <ReactTooltip id='reacttip' effect="float" place="bottom"><span>React</span></ReactTooltip>
        <ReactTooltip id='jquerytip' effect="float" place="bottom"><span>jQuery</span></ReactTooltip>
        <ReactTooltip id='bootstraptip' effect="float" place="bottom"><span>Bootstrap</span></ReactTooltip>
        <ReactTooltip id='highchartstip' effect="float" place="bottom"><span>Highcharts</span></ReactTooltip>
        <ReactTooltip id='gulptip' effect="float" place="bottom"><span>Gulp</span></ReactTooltip>

        <ReactTooltip id='jiratip' effect="float" place="bottom"><span>Jira</span></ReactTooltip>
        <ReactTooltip id='confluencetip' effect="float" place="bottom"><span>Confluence</span></ReactTooltip>
        <ReactTooltip id='gittip' effect="float" place="bottom"><span>Git</span></ReactTooltip>
        <ReactTooltip id='githubtip' effect="float" place="bottom"><span>GitHub</span></ReactTooltip>
        <ReactTooltip id='azuretip' effect="float" place="bottom"><span>Microsoft Azure</span></ReactTooltip>
        <ReactTooltip id='awstip' effect="float" place="bottom"><span>Amazon Web Services</span></ReactTooltip>
        <ReactTooltip id='wordpresstip' effect="float" place="bottom"><span>Wordpress.org</span></ReactTooltip>
        <ReactTooltip id='dockertip' effect="float" place="bottom"><span>Docker</span></ReactTooltip>

        <ReactTooltip id='mongotip' effect="float" place="bottom"><span>MongoDB</span></ReactTooltip>
        <ReactTooltip id='nodetip' effect="float" place="bottom"><span>Node.js</span></ReactTooltip>
        <ReactTooltip id='expresstip' effect="float" place="bottom"><span>Express</span></ReactTooltip>
        <ReactTooltip id='mysqltip' effect="float" place="bottom"><span>MySQL</span></ReactTooltip>
        <ReactTooltip id='phptip' effect="float" place="bottom"><span>PHP</span></ReactTooltip>
        <ReactTooltip id='hostingertip' effect="float" place="bottom"><span>Hostinger</span></ReactTooltip>
        <ReactTooltip id='herokutip' effect="float" place="bottom"><span>Heroku</span></ReactTooltip>
        <ReactTooltip id='cpaneltip' effect="float" place="bottom"><span>CPanel</span></ReactTooltip>
      </section>
      
    );
  }

export default TechStack;
