import Ember from 'ember';

export default Ember.Route.extend({
  model(params){

    let geopeak = this.store.createRecord('piece', {
      title: "GeoPeak Energy",
      slug: "geopeak-energy",
      url: "www.geopeakenergy.com",
      body: ["When I was first hired at GeoPeak Energy, their website was, to be frank, horrible. With design inconsistencies and usability issues throughout, it was quite a headache. Since a large portion of GeoPeak Energy's residential leads came through the website, I knew I had an opportunity to make an immediate impact."],
      images: [
        "/images/gpemockup.jpg"
      ],
      technologies: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Sublime Text 2",
        "WordPress",
        "PHP",
        "HTML/CSS + Javascript",
        "jQuery",
      ],


    });
    let exp = this.store.createRecord('piece', {
      title: "EXP Website",
      slug: "exp",
      url: "www.exp-inc.com",
      body: [
        "EXP is a leading provider of world-class quality, environment, health and saftey enterprise-level software solutions.",
        "When EXP (formerly EXP-Hazox) split from its partner, Hazox, there was an immediate need for a new design identity, logo, website, branding brochure, and more."
      ],
      images: [
        "/images/expsitemockup.jpg",
        "/images/exppage.jpg",
        "/images/expbrochure.jpg"
      ],
      technologies: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Sublime Text 2",
        "WordPress",
        "PHP",
        "HTML/CSS + Javascript",
        "jQuery",
      ],


    });
    let hrudaya = this.store.createRecord('piece', {
      title: "Heal a Heart Charity Website",
      slug: "hrudaya",
      url: "http://wesavehearts.org/",
      body: [
        "When I was approached by Heal a Heart to help rebrand their non-profit and to develop a new website, I was excited by the opportunity to contribute to such a noble cause.",
        "During our intital conference calls I got to learn about the organizations and its goals for their upcoming rebrand and new website. I started dreaming up user personas for an audience analysis.",
        "After our intial conversations I went to work, creating user personas with donators as a primary audience. During our next group meeting I received great feedback on changing the primary audience from donators to prospective parters and sponsors. Although this correction was made near the project deadline, I was able to quickly rework the site to serve as a branding website."
      ],
      images: [
        "/images/hrudaya.jpg",
        "/images/hahpersonas.jpg",
        "/images/hahia.jpg",
        "/images/hahlofi.jpg"
      ],
      technologies: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Sublime Text 2",
        "WordPress",
        "PHP",
        "HTML/CSS + Javascript",
        "jQuery",
      ],


    });
    let crcl = this.store.createRecord('piece', {
      title: "CRC Press Responsive Landing Pages",
      slug: "crc-press-landing-pages",
      url: "http://crcpress.com/go/nanotechnology_understanding_small_systems_third_edition",
      body: [
        "In 2014, CRC Press generated a record number of landing pages. Each page was created manually, often with custom graphics from the Graphic Design department. There was a need for an automated landing page creation engine, so that marketing managers could easily create landing pages without needing to get materials from the graphic design department.",
        "I talked to project stakeholders and identified the need for several different types of landing pages, including multi-book landing pages, single-book landing pages, and infromation capture form landing pages."
      ],
      images: [
        "/images/landingpages.jpg"
      ],
      technologies: [
        "Webstorm",
        "HTML5/CSS3 + JavaScript",
        "SVN",
        "Bower",
        "Grunt"
      ],
    });
    let crce = this.store.createRecord('piece', {
      title: "CRC Press E‑Commerce Site Enhancements",
      slug: "crc-press-enhancements",
      url: "http://crcpress.com/",
      body: [
        "When I first arrived at Taylor and Francis Group, there was major initiative to update and enhance their aging e-commerce site. Piece by piece we are progressively enhancing the site to meet today's design, functionality, and performance standards."
      ],
      images: [
        "/images/crcWishlist.jpg",
        "/images/browse.jpg",
        "/images/search.jpg"
      ],
      technologies: [
        "Webstorm",
        "Subversion",
        "Smarty Template Engine",
        "HTML/CSS + JavaScript",
        "Bower",
        "Yeoman",
        "Grunt"
      ],
    });
    let rc = this.store.createRecord('piece', {
      title: "Resource Center Application Design and Front-End Development",
      slug: "resource-center",
      url: "http://support.crcnetbase.com/",
      body: [
        "CRCnetBASE Librarian Resource Center is a web application which allows library staff to access materials related to their CRCnetBASE and CHEMnetBASE subscriptions."
      ],
      images: [
        "/images/resourceCenter.jpg"
      ],
      technologies: [
        "Webstorm",
        "Git",
        "HTML5/CSS3 + JavaScript",
        "Bower",
        "Yeoman",
        "Smarty Template Engine",
        "Grunt"
      ],
    });
    let conan = this.store.createRecord('piece', {
      title: "Conan - Conference Application Prototype",
      slug: "conan",
      url: "http://support.crcnetbase.com/",
      body: [
        "The CRC Conference Application (Conan for short) is an iPad application in development that will allow Taylor and Francis representatives attending conferences to process orders that is connected to the CRC Press core application which allows it to read and update inventory levels and more."
      ],
      images: [
        "/images/conan.jpg",
        "/images/conan1.jpg",
        "/images/conan2.jpg",
        "/images/conan3.jpg"
      ],
      technologies: [
        "Webstorm",
        "Git",
        "HTML5/CSS3 + JavaScript",
        "Bower",
        "Yeoman",
        "Smarty Template Engine",
        "Grunt"
      ],
    });
    let wwc = this.store.createRecord('piece', {
      title: "Worksite Webcams",
      slug: "worksite-webcams",
      url: "http://worksitewebcams.com/",
      body: [
        "I had previously done some maintenance work and minor enhancements to an aging PHP application. There were points of failure it was a liability to the business. I proposed a ground up rebuild which would save money in the long run. Today, Worksite Webcam's is a full-stack MEEN (mongo express ember node) application. I also developed a new event-based ETL system for backend asset processing. I controlled versioning through git and GitHub. The app is deployed using AWS EC2, Elastic Beanstalk, S3, and MLab. The application also consumes external APIs for supplementary meta data collection."
      ],
      images: [
        "/images/wwc.jpg"
      ],
      technologies: [
        "Adobe Illustrator",
        "ES2015",
        "Node",
        "Express",
        "Mongoose",
        "MongoDB",
        "mLab",
        "JSON-API",
        "ember.js",
        "ember-data",
        "jQuery",
        "SCSS",
        "Responsive Design",
        "AWS EC2",
        "AWS Elastic Beanstalk",
        "AWS S3"
      ],
    });
    let v2 = this.store.createRecord('piece', {
      title: "Creating My Responsive AngularJS Portoflio Site",
      slug: "portfolio-v2",
      body: [
        "Readers Beware",
        "On this page I'm going to let you into my design process creating this web site, which goes against one of the fundamental duties of designers: recognizing what doesn't work and never letting it see the light of day.",
          "Much like a magician revealing his tricks, you will find that the prep work isn't nearly as magical or sexy as the final presentation. However, on this page, I'm going to show you the un-sexy prep work that is my design process.",
          "First I start with some planning exercises to identify the goals and scope of my project. Depending on the size or scope of the project, these may just be quick mental exercises or they sometimes become documents that can be shared or reviewed with a team and/or stakeholders. The first 3 things I want to learn about a project are scope, audience, and priorities/deadlines.",
        "At this point, its time to start the creative brainstorming process. I like to just lay everything out in a mess including copy, images, logos, page layouts while abanoning some ideas after five minutes and developing other much further."
      ],
      images: [
        "/images/moscow.jpg",
        "/images/creativebrainstorming.jpg",
        "/images/v2.png"
      ],
      technologies: [
        "Adobe Illustrator",
        "Angular",
        "NPM",
        "HTML5/CSS3 + JavaScript",
        "jQuery",
        "GitHub",
        "SCSS"
      ],
    });
    let cq = this.store.createRecord('piece', {
      title: "AutoCode & CarQualifier",
      url: "http://www.autocode.com/",
      slug: "autocode-carqualifier",
      body: [
        "Lead planning, scheduling, and development through agile/scrum methodology. Architected and developed front-end single page application for CarQualifier online marketplace. Developed configurable applications components for SaaS offering using modular design patterns for maximum code re-usability. Design and implement improvements to user interface and experience. "
      ],
      images: [
        "/images/ac.png",
        "/images/cq1.png",
        "/images/cq2.png",
        "/images/cq3.png",
      ],
      technologies: [
        "Adobe Illustrator",
        "Ember",
        "AJAX",
        "Fetch",
        "Facebook JS SDK",
        "HTML5/CSS3 + JavaScript",
        "NPM",
        "GitHub",
        "SCSS"
      ],
    });

    // cq.save();
    // v2.save();
    // wwc.save();
    // conan.save();
    // rc.save();
    // crcl.save();
    // crce.save();
    // geopeak.save();
    // exp.save();
    // hrudaya.save();

    return this.store.query('piece', { orderBy: "slug", startAt: params.piece_slug, endAt: params.peiceSlug })
      .then(model => {
        return model.get('firstObject');
      });

  },
  serialize: function(model, params) {
    return { slug: model.get('slug')};
  }
});
