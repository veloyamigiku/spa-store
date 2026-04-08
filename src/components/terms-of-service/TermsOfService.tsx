import React from "react";
import Preamble from "./Preamble";
import SupplementrayProvisions from "./SupplementaryProvisions";
import Provisions from "./Provision";

const TermsOfService: React.FC = () => {

  return (
    <div>
      
      <Preamble />
      
      <Provisions title="第1条 本規約の目的">
        <div>本規約は、株式会社xxx(以下「当社」といいます。)がインターネットWebサイト上に開設する店舗「 xxxドットコム 」(以下、「本ショップ」といいます。)において商品及び役務を販売するサービス(以下、「本サービス」といいます。)の利用について定めるものです。</div>
        <div>本サービスを利用する者(以下「利用者」といいます。)は、本規約を誠実に遵守するものとします。</div>
      </Provisions>

      <Provisions title="第2条 本規約の範囲">
        <div>本規約は利用者と当社との間の本サービスに関する一切の関係に適用します。</div>
        <div>当社が本サービスの円滑な運用を図るため必要に応じて利用者に通 知する本サービスの利用に関する諸規程は、本規約の一部を構成するものとします。</div>
      </Provisions>
      
      <SupplementrayProvisions />

    </div>
  )

}

export default TermsOfService