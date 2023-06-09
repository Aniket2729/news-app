import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class NewsContainer extends Component {
  articles = [
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Isaac Arnsdorf, Josh Dawsey",
      title:
        "'Frustrated and upset,' Trump goes silent, then seethes - The Washington Post",
      description:
        "The splitscreen highlighted the two worlds Trump is spanning as he makes a third straight bid for the presidency: one in which he is a defiant political hero and another in which he is in increasing legal peril.",
      url: "https://www.washingtonpost.com/politics/2023/04/04/trump-arraignment-speech-2024-campaign/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JKKOJP6NOSCGALIWOL3RGM7WWI_size-normalized.JPG&w=1440",
      publishedAt: "2023-04-05T05:41:19Z",
      content:
        "Comment on this story\r\nPALM BEACH, Fla. Donald Trump spent much of Tuesday in an unfamiliar position, at the mercy of others: whisked around Manhattan by the Secret Service; getting fingerprinted in … [+8786 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "",
      title:
        "2023 Masters picks, odds: Expert predictions, favorites to win from betting field at Augusta National - CBS Sports",
      description:
        "Who will win the 87th Masters? Our experts dive into all the twists and turns of the year's greatest major",
      url: "https://www.cbssports.com/golf/news/2023-masters-picks-odds-expert-predictions-favorites-to-win-from-betting-field-at-augusta-national/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/04/04/c486f528-d56c-4aca-92fc-6a3025b1a31f/thumbnail/1200x675/e00e5f6f329712c7393acb7c8d5509cc/masterse-p-editorial-v6.jpg",
      publishedAt: "2023-04-05T05:36:00Z",
      content:
        "With the 87th Masters fast approaching, the key question everyone's asking is the same across the golf world: Who are you picking to win this year at Augusta National? With a tremendous field featuri… [+11677 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Abeer Salman, Mohammed Tawfeeq, Jennifer Hauser",
      title:
        "Clashes erupt inside the al-Aqsa mosque after Israeli forces enter - CNN",
      description:
        "Israeli police clashed with Palestinians inside the al-Aqsa mosque in Jerusalem's Old City early on Wednesday, just days after a Palestinian man was killed outside the holy site.",
      url: "https://www.cnn.com/2023/04/05/middleeast/israel-al-aqsa-mosque-clash-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230404234435-01-al-aqsa-mosque-raid-040423-restricted.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-04-05T05:26:00Z",
      content:
        "Israeli police clashed with Palestinians inside the al-Aqsa mosque in Jerusalems Old City early on Wednesday, just days after a Palestinian man was killed outside the holy site.\r\nThe Palestinian Red … [+4864 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Nouran Salahieh, Mike Saenz",
      title:
        "Over 62 million are at risk of severe weather as tornado-spawning storm system treks across Central US - CNN",
      description:
        "Over 62 million are at risk of severe weather Wednesday as a major tornado-spawning storm system treks across the Central US, threatening more damage ahead after battering Iowa, Illinois, Missouri and Michigan.",
      url: "https://www.cnn.com/2023/04/05/weather/us-severe-storms-tornado-threat-wednesday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230404174606-08-severe-weather-illinois-0404.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-04-05T05:19:00Z",
      content:
        "Over 62 million are at risk of severe weather Wednesday as a major tornado-spawning storm system treks across the Central US, threatening more damage ahead after battering Iowa, Illinois, Missouri an… [+3106 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Bryan Pietsch",
      title:
        "Johnson & Johnson offers $8.9B to settle talc baby powder claims - The Washington Post",
      description:
        "The proposed settlement would be paid out over 25 years to settle claims that talc in baby powder caused cancer, which Johnson & Johnson denies.",
      url: "https://www.washingtonpost.com/business/2023/04/04/johnson-baby-powder-talc-settlement-cancer/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XZ4MRCBTC5Y3T2FRLDRCSHIYRQ.JPG&w=1440",
      publishedAt: "2023-04-05T04:11:06Z",
      content:
        "Comment on this story\r\nJohnson &amp; Johnson said it has agreed to pay $8.9 billion to settle claims that talc in its popular baby powder caused cancer.\r\nThe settlement, which Johnson &amp; Johnson p… [+1083 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Eric Bradner",
      title:
        "Progressive Brandon Johnson will be elected Chicago mayor, succeeding Lori Lightfoot, CNN projects - CNN",
      description:
        "Chicago voters will choose Brandon Johnson, a progressive Cook County commissioner backed by the powerful teachers union, as the city's next mayor, CNN projects.",
      url: "https://www.cnn.com/2023/04/04/politics/chicago-mayoral-election-results/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230404223853-01-brandon-johnson-chicago-election-2023.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-04-05T04:01:00Z",
      content:
        "Chicago voters will choose Brandon Johnson, a progressive Cook County commissioner backed by the powerful teachers union, as the citys next mayor, CNN projects. \r\nJohnson will win Tuesdays runoff ele… [+4037 chars]",
    },
    {
      source: { id: null, name: "East Idaho News" },
      author: null,
      title: "4 people found dead near a hotel in Cancun - East Idaho News",
      description:
        "(CNN) — Four people were found dead near a hotel in Cancun on Monday, according to Mexican officials, the latest bout of violence in the popular tourist destination. Two people have been arrested for their possible involvement in the deaths of four people, ac…",
      url: "https://www.eastidahonews.com/2023/04/4-people-found-dead-near-a-hotel-in-cancun/",
      urlToImage:
        "https://s3.us-west-2.amazonaws.com/assets.eastidahonews.com/wp-content/uploads/2023/04/hypatia-h_ee0ecab68a0cce019841f92f68589f87-h_756506be197c73aebb6ca6f9793ddfac.jpg",
      publishedAt: "2023-04-05T03:14:00Z",
      content: null,
    },
    {
      source: { id: null, name: "SciTechDaily" },
      author: null,
      title:
        "Unraveling the Universe: Groundbreaking Measurement Shakes Up Physics - SciTechDaily",
      description:
        "When it comes to measuring how fast the Universe is expanding, the result depends on which side of the Universe you start from. An EPFL study has calibrated the best cosmic yardsticks to unprecedented accuracy, shedding new light on the Hubble tension. The Hu…",
      url: "https://scitechdaily.com/?p=266195",
      urlToImage:
        "https://scitechdaily.com/images/Abstract-Technology-Universe-Expansion.jpg",
      publishedAt: "2023-04-05T02:58:12Z",
      content:
        "BySwiss Federal Institute of Technology Lausanne (EPFL)April 4, 2023\r\nA new study amplifies the Hubble tension, a discrepancy in cosmic expansion rate measurements, by providing the most accurate cal… [+2915 chars]",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Eric Garcia",
      title:
        "Trump attacks judge's family and calls Alvin Bragg a 'criminal' at Mar-a-Lago despite court warning - The Independent",
      description:
        "Former president addresses his supporters after his formal arraignment with a legal cloud hanging over his head",
      url: "https://www.independent.co.uk/news/world/americas/us-politics/trump-bragg-arraignment-speech-mar-a-lago-b2314331.html",
      urlToImage:
        "https://static.independent.co.uk/2023/04/05/02/Trump_Indicted_10151.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-04-05T02:11:12Z",
      content:
        "Sign up for the daily Inside Washington email for exclusive US coverage and analysis sent to your inbox\r\nGet our free Inside Washington email\r\nFormer president Donald Trump assailed the family judge … [+4483 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "\"The Only Crime I've Committed...\": Donald Trump's Fierce Attack On Biden - NDTV",
      description:
        'Donald Trump, former US president, attacked his successor Joe Biden saying that the "country is going to hell" hours after being charged over hush money payments to a porn star.',
      url: "https://www.ndtv.com/world-news/our-country-is-going-to-hell-donald-trump-former-us-president-attacks-biden-administration-after-facing-charges-3921203",
      urlToImage:
        "https://c.ndtvimg.com/2023-04/7lrlh6bo_donald-trump_625x300_05_April_23.jpg",
      publishedAt: "2023-04-05T02:05:00Z",
      content:
        'Donald Trump has been charged for making hush money payments to a porn star.\r\nFlorida: Donald Trump, former US president, attacked his successor Joe Biden saying that the "country is going to hell" h… [+2220 chars]',
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Peter White",
      title:
        "Jon Stewart Returns To 'The Daily Show' To Help Roy Wood Jr. Go Viral - Deadline",
      description:
        "The Daily Show used to have a white host? Guest host and correspondent Roy Wood Jr. was joined by former host Jon Stewart in a bid to help him go viral, aiding his cause to get the desk job on a pe…",
      url: "https://deadline.com/2023/04/jon-stewart-returns-to-the-daily-show-to-help-roy-wood-jr-go-viral-1235318308/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2023/04/Daily-Show.png?w=1024",
      publishedAt: "2023-04-05T01:26:00Z",
      content:
        "The Daily Showused to have a white host?\r\nGuest host and correspondent Roy Wood Jr. was joined by former host Jon Stewart in a bid to help him go viral, aiding his cause to get the desk job on a perm… [+1585 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Tara John",
      title:
        "'Queen Camilla' used officially for the first time on King Charles' coronation invitation - CNN",
      description:
        "Buckingham Palace released King Charles' coronation invitation on Tuesday, in which his wife was titled Queen Camilla for the first time.",
      url: "https://www.cnn.com/2023/04/04/uk/uk-king-charles-queen-camilla-coronation-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230404183403-01-king-charles-camilla-coronation-042023.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-04-05T01:06:00Z",
      content:
        "Buckingham Palace released King Charles coronation invitation on Tuesday, in which his wife was titled Queen Camilla for the first time. \r\nThe intricate invitation, which is printed on recycled card … [+3387 chars]",
    },
    {
      source: { id: null, name: "WCTI12.com" },
      author: "The National Desk",
      title:
        "More tornadoes could slam storm-ravaged states overnight as two strike Iowa - WKRC TV Cincinnati",
      description:
        "Millions of Americans from Texas to Michigan are under risk of severe weather and possible tornadoes Tuesday.",
      url: "https://wcti12.com/news/nation-world/overnight-tornadoes-could-once-again-slam-storm-ravaged-states-forecasters-say-weather-forecast-arkansas-missouri-oklahoma-iowa-illinois-severe-weather-takes-aim-at-midwest-south-as-several-states-recover-from-deadly-tornadoes-swaths-of-damage",
      urlToImage:
        "https://wcti12.com/resources/media/1c773dc7-8097-4ef5-96bf-fb40cb06a2c2-large16x9_colona3.jpg?1680652682203",
      publishedAt: "2023-04-05T00:46:00Z",
      content: null,
    },
    {
      source: { id: null, name: "NBCSports.com" },
      author: null,
      title:
        "Should Patriots and 49ers consider a Mac Jones-Trey Lance trade? - NBC Sports Boston",
      description:
        "Does a report that Bill Belichick has \"shopped\" quarterback Mac Jones open up the possibility of a trade involving two 2021 first-round picks? Pro Football Talk's Mike Florio discussed the fascinating scenario on Tom E. Curran's latest Patriots Talk Podcast.",
      url: "https://www.nbcsports.com/boston/patriots/should-patriots-and-49ers-consider-mac-jones-trey-lance-trade",
      urlToImage:
        "https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/Mac-Jones-Trey-Lance-USATSI_19136247-USATSI_19708785.jpg",
      publishedAt: "2023-04-05T00:03:10Z",
      content:
        "The New England Patriots' offseason just got a lot more interesting.\r\nMike Florio's report Tuesday that Bill Belichickhas shopped Patriots quarterbackMac Jones to \"several teams\" has opened up plenty… [+3161 chars]",
    },
    {
      source: { id: "the-hill", name: "The Hill" },
      author: "Jeremy Tanner",
      title:
        "Don’t use the front passenger seat in these 140K recalled vehicles, Volkswagen says - The Hill",
      description:
        "“Until the free recall repair is developed and completed, owners should not allow anyone to sit in the front passenger seat,” the news release stated. “Volkswagen is currently developing a remedy and will notify affected owners as soon as the repair is availa…",
      url: "https://thehill.com/homenews/nexstar_media_wire/3934663-dont-use-the-front-passenger-seat-in-these-140k-recalled-vehicles-volkswagen-says/",
      urlToImage:
        "https://thehill.com/wp-content/uploads/sites/2/2023/04/GettyImages-939238396.jpg?w=1280",
      publishedAt: "2023-04-04T23:50:00Z",
      content:
        "Skip to content\r\n(NEXSTAR) – Volkswagen is warning not people not to sit in the front passenger seat of over 140,000 of their SUVs that are now under recall.\r\nThe recall pertains to 143,053 2018-2021… [+1076 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Caitlin Yilek",
      title: "Trump did not get a mugshot during his arrest - CBS News",
      description:
        "Even if Trump was to have had his mugshot taken, New York bans law enforcement from releasing most mugshots publicly.",
      url: "https://www.cbsnews.com/news/trump-mugshot-campaign-shirt-fundraising-arraignment/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/04/04/af5bf3ef-8fce-44e4-81d3-a441460dc17a/thumbnail/1200x630g2/b960f736214ae3738132866381380f60/ap23094667426458.jpg",
      publishedAt: "2023-04-04T23:07:00Z",
      content:
        "Former President Donald Trump did not have his mugshot taken when he surrendered to authorities at a Manhattan courthouse on Tuesday, according to his lawyer Joe Tacopina, but his 2024 presidential c… [+1619 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "Matt Seyler",
      title:
        "Here's what's in Biden administration's new $2.6 billion military aid packages for Ukraine - ABC News",
      description:
        "The U.S. is sending anti-drone guns and Patriot air defense munitions.",
      url: "https://abcnews.go.com/International/biden-administrations-new-26-billion-military-aid-packages/story?id=98354380",
      urlToImage:
        "https://s.abcnews.com/images/International/ukraine-4-ap-er-230404_1680641235748_hpMain_2_16x9_992.jpg",
      publishedAt: "2023-04-04T23:02:12Z",
      content:
        'The Pentagon on Tuesday announced $2.6 billion in new security assistance for Ukraine ahead of an anticipated spring counteroffensive against Russian invading forces.\r\n"Our focus is on supporting the… [+1921 chars]',
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Michael Blinn",
      title:
        "March Madness 2023 men's final hits record-low viewership as women's game soars - New York Post ",
      description:
        "A reported 14.693 million viewers tuned in to watch UConn stifle San Diego State en route to the 2023 NCAA title on Monday night.",
      url: "https://nypost.com/2023/04/04/mens-march-madness-final-tv-ratings-hit-record-low/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/04/newspress-collage-26442640-1680646477436.jpg?quality=75&strip=all&1680632161&w=1024",
      publishedAt: "2023-04-04T22:53:00Z",
      content:
        "A reported 14.693 million viewers tuned in to watch UConn stifle San Diego State en route to the 2023 NCAA men’s basketball championship on Monday night.\r\nThat total per the Sports TV Ratings account… [+2613 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "USA TODAY",
      title:
        "Ukraine Russia live updates: Finland formally joins NATO, 31st member - USA TODAY",
      description: null,
      url: "https://www.usatoday.com/story/news/world/2023/04/04/ukraine-russia-war-live-updates/11597701002/",
      urlToImage: null,
      publishedAt: "2023-04-04T21:57:20Z",
      content: null,
    },
    {
      source: { id: null, name: "Neurosciencenews.com" },
      author: "Neuroscience News",
      title:
        "COVID-19 Infection Accelerates the Progression of Dementia - Neuroscience News",
      description: null,
      url: "https://neurosciencenews.com/covid-19-dementia-22938/",
      urlToImage: null,
      publishedAt: "2023-04-04T21:28:23Z",
      content: null,
    },
  ];
  static defaultProps = {
    country: "in",
    pageSize: 20,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=730ff7322cfa42b1bcf5c490a89dd47b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  category = this.props;
  render() {
    return (
      <>
        <h1 className="my-6 text-4xl font-bold text-center ">
          Top Headline in US of {this.props.category}
        </h1>
        {this.state.loading && <Spinner />}
        <div key={this.state.articles.url} className="container  my-10">
            <div className="row  max-sm:flex-col  border-4 border-yellow-400">
              {this.state.articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-4 w-25 ">
                    <NewsItem
                      title={element.title ? element.title.slice(0, 50) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 50)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      Link={element.url}
                      author={element.author ? element.author : "unknown"}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
               })}
            </div>
          </div>
        <div className="container d-flex justify-content-between">
            <button  disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">&larr; Previous</button>
            <ul className="pagination">
              <li className="page-item my-2">
                <a className="page-link" href="/">
                  {this.state.page}
                </a>
              </li>
            </ul>
            <button  disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              } onClick={this.handleNextClick}  className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Next &rarr;</button>
          </div>
      </>
    );
  }
}

export default NewsContainer;
