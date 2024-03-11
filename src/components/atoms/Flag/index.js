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
        'ar': <ArFlag height={16} width={20} />,
        'bs': <BsFlag height={16} width={20} />,
        'mh': <MhFlag height={16} width={20} />,
        'uy': <UyFlag height={16} width={20} />,
        'ng': <NgFlag height={16} width={20} />,
        'tg': <TgFlag height={16} width={20} />,
        'us': <UsFlag height={16} width={20} />,
        'th': <ThFlag height={16} width={20} />,
        'hk': <HkFlag height={16} width={20} />,
    }

    return (<div className='mx-2 o-hidden br-4 bw-2 bc-white ba flex flex-center'>
        {flagMap[ flagName ] || ''}</div>)
}

export default Flag