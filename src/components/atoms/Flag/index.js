import React from 'react';
import { ReactComponent as ArFlag } from '../../../assets/flags/ar.svg'
import { ReactComponent as BsFlag } from '../../../assets/flags/bs.svg'
import { ReactComponent as UyFlag } from '../../../assets/flags/uy.svg'
import { ReactComponent as MhFlag } from '../../../assets/flags/mh.svg'
import { ReactComponent as NgFlag } from '../../../assets/flags/ng.svg'
import { ReactComponent as TgFlag } from '../../../assets/flags/tg.svg'
import { ReactComponent as ThFlag } from '../../../assets/flags/th.svg'
import { ReactComponent as UsFlag } from '../../../assets/flags/us.svg'
import { ReactComponent as HkFlag } from '../../../assets/flags/hk.svg'
function Flag(props) {
    const { countryCode } = props
    const flagName = countryCode.toLowerCase();
    const flagMap = {
        'ar': <ArFlag height={20} width={28} />,
        'bs': <BsFlag height={20} width={28} />,
        'mh': <MhFlag height={20} width={28} />,
        'uy': <UyFlag height={20} width={28} />,
        'ng': <NgFlag height={20} width={28} />,
        'tg': <TgFlag height={20} width={28} />,
        'us': <UsFlag height={20} width={28} />,
        'th': <ThFlag height={20} width={28} />,
        'hk': <HkFlag height={20} width={28} />,
    }

    return (<div className='mx-2 o-hidden br-4 bw-2 bc-white ba flex flex-center'>
        {flagMap[ flagName ] || ''}</div>)
}

export default Flag