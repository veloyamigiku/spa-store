import type React from 'react'
import Chapter from './Chapter'
import Section from './Section'
import Term from './Term'

import styles from './PrivacyPolicy.module.css'

const PrivacyPolicy: React.FC = () => {

  return (
    <div>
      <div className={styles.privacy_policy_title}>
        <div className={styles.privacy_policy_title_en}>PRIVACY POLICY</div>
        <div className={styles.privacy_policy_title_ja}>プライバシーポリシー</div>
      </div>

      <Chapter title='当社の個人情報保護への取り組み【〇elcia】'>
        <Section>
          当社XXは、企業理念の実現に向け、お客様視点の接客、施術の専門性と豊富なサービスで、お客様に、より便利で、安心してご利用いただけるインフラとしてビューティーサロンを運営してまいります。ビューティサロンの運営・営業活動の過程でお客様からお預かりするお客様個人を識別できる情報や従業員などを含む関係者から取得した個人を識別できる情報（以下「個人情報」といいます。）については、その適切な管理・保護に努め、また安全対策などを講じるとともに、定期的に教育を行い社内にこれを周知徹底してまいります。
        </Section>
      </Chapter>
      
      <Chapter title='個人情報の収集【〇EIMS】'>
        <div>当社は、施術・商品取引またはお客様からの当社に対するお問い合わせ等により、主に以下のようなお客様に関する情報を取得致します。</div>
        <Section>
          <div>（１）お客様から提供される情報</div>
          <Term>①氏名（フリガナを含む）、住所、電話番号（携帯電話・FAXを含む）、電子メールアドレス、携帯メールアドレス、その他連絡に関する情報、生年月日、性別、クレジットカード情報など、お客様から当社に提供される一切の情報</Term>
        </Section>
        <Section>
          <div>（２）サービスの利用に関連して取得される情報</div>
          <Term>①お客様が当社で商品取引を申し込まれた場合の、お客様を識別できる情報と関連した状態での取引履歴に関する情報</Term>
          <Term>②電話や電子メールその他の手段による、当店に対しての質問、または商品・サービスの評価などを行った場合の、その発言または記載内容に関する情報</Term>
        </Section>
        <Section>
          <div>（３）お取引先様に関する個人情報【〇〇ドラッグ】</div>
          <Term>お取引先様ご本人から取得する情報：氏名、住所、性別、電話番号、メールアドレス、所属、役職など。なお、これらの情報の一部は、ご提供いただけない場合、当社によるお取引先様との間の契約の履行が困難となることがあります。</Term>
        </Section>
      </Chapter>

      <Chapter title='利用目的【〇EIMS】'>
        <div>当社は、当社が取得したお客様の個人情報について、次の目的（以下、「利用目的」）のためにのみ利用致します。</div>
      </Chapter>
    </div>
  )

}

export default PrivacyPolicy