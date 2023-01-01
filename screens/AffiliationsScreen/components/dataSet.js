//  let tpaList = ['ANMOL MEDICARE INSURANCE TPA LIMITED', 'DEDICATED HEALTH CARE SERVICES ( INDIA ) PVT. LTD. MUMBAI.', 'E-MEDI TECH SOLUTIONS LTD.', 'EAST WEST ASSIST INSURANCE TPA PRIVATE LIMITED', 'ERICSON INSURANCE TPA PRIVATE LIMITED', 'HERITAGE HEALTH INSURANCE TPA PRIVATE LIMITED', 'HEALTH INDIA INSURANCE TPA SERVICES PRIVATE LIMITED', 'FAMILY HEALTH PLAN INSURANCE TPA LIMITED.', 'FOCUS HEALTHCARE PVT LTD ', 'GOOD HEALTH INSURANCE TPA LIMITED. ', 'HDFC LIFE INSURANCE', 'HDFC ERGO HEALTH INSURANCE ', 'PARAMOUNT HEALTH SERVICES & INSURANCE TPA PRIVATE LIMITED', 'PARK MEDICLAIM INSURANCE TPA PRIVATE LIMITED', 'MDINDIA HEALTH INSURANCE TPA PRIVATE LIMITED', 'MEDI ASSIST INSURANCE TPA PRIVATE LIMITED', 'MEDICARE TPA SERVICES (1) PVT. LTD', 'MEDSAVE HEALTH INSURANCE TPA LIMITED. ', 'RAKSHA HEALTH INSURANCE TPA PRIVATE LIMITED', 'ROTHSHIELD INSURANCE TPA LIMITED', 'SAFEWAY INSURANCE TPA PRIVATE LIMITED', 'UNITED HEALTH CARE PAREKH INSURANCE TPA PRIVATE LIMITED', 'VIPUL MEDCORP INSURANCE TPA PRIVATE LIMITED', 'VIDAL HEALTH INSURANCE TPA PRIVATE LIMITED']
//  let insuranceCompanyList = ['ACKO GENERAL INSURANCE LTD', 'ADITYA BIRLA HEALTH INSU.CO.LTD', 'BAJAJ ALLIANZ GENERAL INSURANCE COMPANY LIMITED', 'BHARTI AXA GENERAL INSURANCE CO. LTD ', 'CARE HEALTH GENERAL INSURANCE COMPANY ', 'CHOLA MS GENERAL INSURANCE COM', 'EDELWEISS GENERAL INSURANCE CO. LTD.', 'FUTURE GENERALI INDIA INSURANCE CO. LTD.', 'GO DIGIT GENERAL INSURANCE LTD', 'HDFC ERGO GENERAL INSURANCE CO.LTD.', 'RELIANCE GENERAL INSURANCE CO.LTD', 'RELIANCE HEALTH INSURANCE LTD.', 'ROYAL SUNDARAM GENERAL INSURANCE CO. LTD.', 'KOTAK MAHINDRA GENERAL INSURANCE CO. LTD.', 'LIBERTY GENERAL INSURANCE LTD.', 'PARAMOUNT HEALTH CARE SERVICES PVT. LTD', 'PARK MEDICLAIM CONSULTANTS PVT. LTD.', 'MANIPAL CINGA INSURANCE CO. LTD', 'MAGMA HDI GENERAL INSURANCE CO. LTD.', 'STAR HEALTH AND ALLIED INSURANCE CO. LTD.', 'SBI GENERAL INSURANCE CO. LTD.', 'TATA AIG GENERAL INSURANCE CO. LTD.', 'THE NEW INDIA ASSURANCE CO. LTD', 'NATIONAL INSURANCE CO. LTD.', 'THE ORIENTAL INSURANCE CO. LTD']
//  let otherCompanyList = ['AIR INDIA', 'AIRPORTS AUTHORITY (JAIPUR AIRPORT-SANGANER)', 'ALANKIT HEALTH CARE LTD.', 'BANK OF RAJASTHAN', 'BANK OFFICERS (RETIRED) ASSOCIATION.', 'CENTRAL INSTITUTE OF PLASTICS ENGINEERING & TECHNOLOGY.', 'CENTRAL SHEEP   AND   WOOL   RESEARCH   INSTITUTE    AVIKANAGAR      (MALPURA -DISTRICT TONK)', 'CENTRAL WAREHOUSING CORPORATION (C.W.C)', 'CIPET : INSTITUTE OF PETROCHEMICALS TECHNOLOGY, JAIPUR', 'FOOD CORPORATION OF INDIA (F.C.I)', 'RAJASTHAN GOVERNMENT HEALTH SCHEME ( RGHS )', 'RAJASTHAN HOUSING BOARD (R.H.B) ', 'RAJASTHAN STATE AGRICULTURE MARKETING BOARD JAIPUR.', 'RAJASTHAN STATE INDUSTRIAL DEVELOPMENT AND INVESTMENT CORP.ORATION LIMITED (RIICO) ', 'RAJSTHAN VIDYUT VITARAN NIGAM LIMITED ( JVVNL RVPLN )  ', 'RAJCOMP.', 'STATE BANK OF BIKANER AND JAIPUR (SBBJ)', 'STATE BANK OF INDIA ( PENSIONERS)', 'UNIVERSITY OF RAJASTHAN']

// * Loops through all three lists above and then extracts the ones required
//? If this function becomes async the rest of the code stops working
export const searchFunction = (value,tpaList,insuranceCompanyList,otherCompanyList) => {

    let t = []
    let ins = []
    let o = []

    //* Each loop does it for each list
    
    for (let i of tpaList) {
        if (i.indexOf(value.toUpperCase()) != -1) {  //! Checks whether search query is present in array string
            t.push(tpaList.filter((val, index) => i == val)[0]) //! Filters out and keeps the ones required and returns it as a STRING
        }
    }
    for (let i of insuranceCompanyList) {
        if (i.indexOf(value.toUpperCase()) != -1) {
            ins.push(insuranceCompanyList.filter((val, index) => i == val)[0])

        }
    }
    for (let i of otherCompanyList) {
        if (i.indexOf(value.toUpperCase()) != -1) {
            o.push(otherCompanyList.filter((val, index) => i == val)[0])

        }
    }
    return { t, ins, o } //! Return in object format
    
}



