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
// import { ReactComponent as JestLogo } from './svg/jest.svg'
import { ReactComponent as JiraLogo } from './svg/jira.svg'
import { ReactComponent as ConfluenceLogo } from './svg/confluence.svg'
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
import { ReactComponent as PhotoshopLogo } from './svg/photoshop.svg'

import { ReactComponent as NextLogo } from './svg/nextjs.svg'
import { ReactComponent as MaterialLogo } from './svg/material-ui.svg'
import { ReactComponent as MongoLogo } from './svg/mongodb.svg'
import { ReactComponent as NodeLogo } from './svg/nodejs.svg'
import { ReactComponent as FirebaseLogo } from './svg/firebase.svg'
import { ReactComponent as ReactQueryLogo } from './svg/react-query.svg'
import { ReactComponent as RouterLogo } from './svg/react-router.svg'
import { ReactComponent as SassLogo } from './svg/sass.svg'
import { ReactComponent as TailwindLogo } from './svg/tailwindcss.svg'


const mobileSize = window.matchMedia('(min-width: 300px)')

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


  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mobileSize.addListener(handler);
    return () => mobileSize.removeListener(handler);
  });
    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">
            <p id="skills_head">SKILLS</p>
            <h1 className="skills_ind_head">LANGUAGES</h1>
            <div className="skill_pieces" style={styles.container(matches)}>
              <JavascriptLogo style={styles.img(matches)} className="stack-logo"/>
              <HTMLLogo style={styles.img(matches)} className="stack-logo"/>
              <CSSLogo style={styles.img(matches)} className="stack-logo"/>
              <SQLLogo style={styles.img(matches)} className="stack-logo"/>
              <CppLogo style={styles.img(matches)} className="stack-logo"/>
              <GraphQLLogo style={styles.img(matches)} className="stack-logo"/>
              <SassLogo style={styles.img(matches)} className="stack-logo"/>
              <PythonLogo style={styles.img(matches)} className="stack-logo"/>
            </div>

            <h1 className="skills_ind_head">JS LIBRARIES &amp; FRAMEWORKS</h1>
            <div className="skill_pieces" style={styles.container(matches)}>
              <ReactLogo style={styles.img(matches)} className="stack-logo"/>
              <JQueryLogo style={styles.img(matches)} className="stack-logo"/>
              <HighchartsLogo style={styles.img(matches)} className="stack-logo"/>
              <GulpLogo style={styles.img(matches)} className="stack-logo"/>
            </div>

            <h1 className="skills_ind_head">TOOLS</h1>
            <div className="skill_pieces" style={styles.container(matches)}>
              <JiraLogo style={styles.img(matches)} className="stack-logo"/>
              <ConfluenceLogo style={styles.img(matches)} className="stack-logo"/>
              <GitLogo style={styles.img(matches)} className="stack-logo"/>
              <AzureLogo style={styles.img(matches)} className="stack-logo"/>
              <AWSLogo style={styles.img(matches)} className="stack-logo"/>
              <WordpressLogo style={styles.img(matches)} className="stack-logo"/>
              <DockerLogo style={styles.img(matches)} className="stack-logo"/>
            </div>

            <h1 className="skills_ind_head">DB, BACK-END &amp; HOSTING</h1>
            <div className="skill_pieces" style={styles.container(matches)}>
              <MongoLogo style={styles.img(matches)} className="stack-logo"/>
              <NodeLogo style={styles.img(matches)} className="stack-logo"/>
              <ExpressLogo style={styles.img(matches)} className="stack-logo"/>
              <MySQLLogo style={styles.img(matches)} className="stack-logo"/>
              <PHPLogo style={styles.img(matches)} className="stack-logo"/>
              <HostingerLogo style={styles.img(matches)} className="stack-logo"/>
              <HerokuLogo style={styles.img(matches)} className="stack-logo"/>
              <CPanelLogo style={styles.img(matches)} className="stack-logo"/>
            </div>
          </div>
        </div>  
      </section>
    );
  }

export default TechStack;
