import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { charlotteLottieRollin } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";
import SearchTag from "shared/SearchTag";
import Link from "next/link";

const CharlotteLottieRollin = () => {

  return (
    <>
      <IntroAndPortrait figure={ charlotteLottieRollin } />

      <section>
        <SectionTitle title="An Anti-Slavery Family" />
        <p>Charlotte Rollin, known as Lottie, was the second eldest of the well-known Rollin Sisters of South Carolina. Rollin's mixed-race parents were financially prosperous and Lottie and her sisters <SearchTag tag="blackwomensuffrage_frances_rollin" label="Frances Ann"/>, Kate, Louisa and Florence Rollin all attended secondary school in the North and became early women's suffrage activists. </p>
        <p>After the Civil War, Lottie and her sister Kate established a school for freedmen in Charleston. The family moved to Columbia, and Lottie went on to work as a clerk at the South Carolina State House. The sisters were influential in the politics of the Reconstruction-era South and held well-attended salons at the Columbia, South Carolina residence that the four younger sisters shared.</p>
      </section>
         
      <section>
        <SectionTitle title="Push for Progress in the Palmetto State" />
        <p>In 1869, Rollin gave a speech on the floor of the South Carolina House of Representatives in favor of universal suffrage. The next year, she was the chair and founder of the South Carolina Woman's Rights Association, and in 1871, she led a meeting at the state capitol pushing for women's suffrage. A member of the <SearchTag tag="blackwomensuffrage_national_american_women_suffrage_association" label="American Woman Suffrage Association (AWSA)"/> and the organizer of its South Carolina chapter, Rollin wrote in an 1871 article in the AWSA's Woman's Journal: "We ask suffrage not as a favor, not as a privilege, but as a right based on the grounds that we are human beings and as such entitled to all human rights." In 1872, Rollin worked alongside her sisters, as well as AWSA leader <Link href="/search?q=lucy+stone"><a>Lucy Stone</a></Link>, to push for an ultimately unsuccessful constitutional amendment granting women's suffrage in South Carolina.</p>
      </section>

      <section>
        <p>As Reconstruction came to an end, and Blacks began to lose their hard-won political power, Rollin feared persecution from the Ku Klux Klan and left South Carolina for Brooklyn.</p>
      </section>

      <section className={scss.key_figures__disclaimer}>
        <p>In the spirit of highlighting hidden voices, we share Charlotte Rollin’s history here as she and her sisters were prominent figures in the Black Women’s Suffrage Movement. We regret that DPLA currently does not have any records documenting her life. If you have information about collections that uncover more of Charlotte’s voice, please email <a href="mailto:info@dp.la">info@dp.la</a>.</p>
      </section>

      <Sources sources={charlotteLottieRollin.sources}/>
    </>
  )
}

export default CharlotteLottieRollin

