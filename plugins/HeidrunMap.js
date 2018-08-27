import React from 'react'
import PropTypes from 'prop-types'

export default class HeidrunMap extends React.Component {
  static propTypes = {
    outputStatus: PropTypes.number,
  }

  render() {
    const {outputStatus} = this.props

    var N = 10; 
    const valves = Array.apply(null, {length: 32}).map(Number.call, Number)
    const valvesStatus = valves.map((v, i) => outputStatus & (1 << i))

    const closedColor = 'red'
    const openColor = 'green'

    return (
      <div>
        <svg width='573' height='365' viewBox='0 0 573 365' fill='none' xmlns='http://www.w3.org/2000/svg' styles={{width: '100%'}}>
          <rect width='8.2' height='6.8' fill='#000' fillOpacity='0' transform='translate(299.6 189.7)'
          />
          <path d='M303.7 191L299.6 189.7L303.7 196.5L307.8 189.7L303.7 191Z' fill='#000'
          stroke='#fff' strokeMiterlimit='10' />
          <rect width='8.2' height='6.8' fill='#000' fillOpacity='0' transform='translate(113.4 189.7)'
          />
          <path d='M117.5 191L113.4 189.7L117.5 196.5L121.6 189.7L117.5 191Z' fill='#000'
          stroke='#fff' strokeMiterlimit='10' />
          <rect width='150.8' height='153.3' fill='#000' fillOpacity='0' transform='translate(208.5 35.7)'
          />
          <path d='M244.9 35.7V47.9H208.5V148.3L209.7 146.3L211.5 148.3V50.9H244.9V178.6H302.2V188.5L303.7 189L305.2 188.5V178.6H359.3V35.7H244.9ZM356.3 175.6H247.9V38.7H356.3V175.6Z'
          fill='#fff' />
          <rect width='8.2' height='6.9' fill='#000' fillOpacity='0' transform='translate(205.7 150.1)'
          />
          <path d='M211.6 153.1L209.8 150.1L208.6 152.1L205.7 157L208.6 156L209.8 155.6L211.6 156.2L213.9 157L211.6 153.1Z'
          fill='#000' stroke='#fff' strokeMiterlimit='10' />
          <rect width='8.2' height='6.9' fill='#000' fillOpacity='0' transform='translate(475.9 190.2)'
          />
          <path d='M480 191.6L478.5 191.1L475.9 190.2L478.5 194.6L480 197.1L481.5 194.6L484.1 190.2L481.5 191.1L480 191.6Z'
          fill='#000' stroke='#fff' strokeMiterlimit='10' />
          <rect width='148.2' height='153.8' fill='#000' fillOpacity='0' transform='translate(389 35.7)'
          />
          <path d='M537.2 178.6V35.7H422.8V136.9H389L389.1 148.5L390.5 146.2L392.1 148.9L392 139.9H422.8V178.6H478.5V189L480 189.5L481.5 189V178.6H537.2ZM534.2 175.6H425.8V38.7H534.2V175.6Z'
          fill='#fff' />
          <rect width='8.3' height='6.9' fill='#000' fillOpacity='0' transform='translate(386.3 150.1)'
          />
          <path d='M392.1 152.8L390.4 150.1L389.1 152.4L386.3 157L389.1 156.1L390.4 155.6L392.1 156.1L394.6 157L392.1 152.8Z'
          fill='#000' stroke='#fff' strokeMiterlimit='10' />
          <rect width='5.3' height='12.3' fill='#000' fillOpacity='0' transform='translate(27.5 305.1)'
          />
          <path d='M29.8 308.3L27.7 309.7C27.6 309.8 27.5 309.7 27.5 309.6V307C27.5 306.9 27.5 306.8 27.6 306.7L29.8 305.2C29.9 305.1 30 305.1 30.1 305.1H32.6C32.7 305.1 32.8 305.2 32.8 305.3V317.2C32.8 317.3 32.7 317.4 32.6 317.4H30C29.9 317.4 29.8 317.3 29.8 317.2V308.3Z'
          fill='#fff' />
          <rect width='8.4' height='12.7' fill='#000' fillOpacity='0' transform='translate(138.9 282.1)'
          />
          <path d='M139 291.6L141.4 291.2C141.5 291.2 141.6 291.2 141.6 291.3C141.8 291.9 142.2 292.3 143 292.3C143.8 292.3 144.3 291.8 144.3 290.9C144.3 290 143.7 289.5 142.8 289.5H142.3C142.2 289.5 142.1 289.4 142.1 289.3V287.3C142.1 287.2 142.2 287.1 142.3 287.1H142.8C143.6 287.1 144.1 286.6 144.1 285.8C144.1 285.1 143.6 284.6 142.9 284.6C142.3 284.6 141.9 285 141.7 285.6C141.7 285.7 141.6 285.8 141.5 285.7L139.1 285.3C139 285.3 138.9 285.2 139 285.1C139.3 283.4 140.7 282.1 143.1 282.1C145.6 282.1 147.1 283.6 147.1 285.5C147.1 286.6 146.6 287.4 145.7 288C146.5 288.4 147.3 289.3 147.3 291C147.3 293.2 145.6 294.8 143.1 294.8C140.8 294.8 139.2 293.6 138.9 291.8C138.9 291.7 138.9 291.6 139 291.6Z'
          fill='#fff' />
          <rect width='8.9' height='12.2' fill='#000' fillOpacity='0' transform='translate(174.9 243)'
          />
          <path d='M174.9 253.3V251C174.9 250.9 174.9 250.9 174.9 250.8L178.3 243.1C178.3 243 178.4 243 178.6 243H181.4C181.5 243 181.6 243.1 181.5 243.2L178.1 250.9H179.8C179.9 250.9 179.9 250.9 179.9 250.8V248.6C179.9 248.5 180 248.4 180.1 248.4H182.6C182.7 248.4 182.8 248.5 182.8 248.6V250.8C182.8 250.9 182.8 250.9 182.9 250.9H183.6C183.7 250.9 183.8 251 183.8 251.1V253.3C183.8 253.4 183.7 253.5 183.6 253.5H183C182.9 253.5 182.9 253.5 182.9 253.6V255C182.9 255.1 182.8 255.2 182.7 255.2H180.2C180.1 255.2 180 255.1 180 255V253.6C180 253.5 180 253.5 179.9 253.5H175.1C175 253.5 174.9 253.4 174.9 253.3Z'
          fill='#fff' />
          <rect width='8' height='12.6' fill='#000' fillOpacity='0' transform='translate(223.2 262.6)'
          />
          <path d='M223.3 271.9L225.6 271.5C225.7 271.5 225.8 271.6 225.8 271.7C226 272.2 226.3 272.5 227 272.5C227.5 272.5 227.9 272.3 228 271.8C228.1 271.6 228.1 271.2 228.1 270.8C228.1 270.3 228.1 270 228 269.8C227.8 269.3 227.5 269.1 227 269.1C226.5 269.1 226.2 269.4 226 269.7C225.9 269.8 225.9 269.9 225.7 269.9H223.4C223.3 269.9 223.2 269.8 223.2 269.7V262.8C223.2 262.7 223.3 262.6 223.4 262.6H230.5C230.6 262.6 230.7 262.7 230.7 262.8V265C230.7 265.1 230.6 265.2 230.5 265.2H226C225.9 265.2 225.9 265.2 225.9 265.3V267.4C226.2 267.1 226.8 266.8 227.8 266.8C229.3 266.8 230.5 267.4 230.9 268.9C231.1 269.4 231.2 270 231.2 271C231.2 271.7 231.1 272.4 230.9 272.8C230.4 274.4 229 275.2 227.1 275.2C224.8 275.2 223.4 274 223.2 272.3C223.2 272 223.2 271.9 223.3 271.9Z'
          fill='#fff' />
          <rect width='8.6' height='12.5' fill='#000' fillOpacity='0' transform='translate(250.6 267.9)'
          />
          <path d='M251.7 273.1L254.4 268C254.5 267.9 254.5 267.9 254.6 267.9H257.4C257.5 267.9 257.6 268 257.5 268.1L255.1 272.7C255.2 272.7 255.4 272.6 255.7 272.6C257.7 272.6 259.2 274.1 259.2 276.4C259.2 278.8 257.4 280.4 254.9 280.4C252.4 280.4 250.6 278.9 250.6 276.5C250.8 275.3 251.1 274.4 251.7 273.1ZM255.1 277.9C255.9 277.9 256.5 277.3 256.5 276.5C256.5 275.7 255.9 275 255.1 275C254.3 275 253.7 275.6 253.7 276.5C253.7 277.3 254.2 277.9 255.1 277.9Z'
          fill='#fff' />
          <rect width='8.2' height='12.3' fill='#000' fillOpacity='0' transform='translate(342.4 269.2)'
          />
          <path d='M347.4 271.9L345.3 271.8C345.2 271.8 345.2 271.8 345.2 271.9V273.1C345.2 273.2 345.1 273.3 345 273.3H342.6C342.5 273.3 342.4 273.2 342.4 273.1V269.4C342.4 269.3 342.5 269.2 342.6 269.2H350.4C350.5 269.2 350.6 269.3 350.6 269.4V271.8C350.6 271.9 350.6 271.9 350.6 272L346.9 281.3C346.8 281.4 346.8 281.5 346.6 281.5H343.8C343.7 281.5 343.6 281.4 343.7 281.3L347.4 271.9Z'
          fill='#fff' />
          <rect width='8.635' height='12.6' fill='#000' fillOpacity='0' transform='translate(407.765 198.7)'
          />
          <path d='M409 204.8C408.4 204.3 407.9 203.5 407.9 202.3C407.9 200.4 409.4 198.7 412 198.7C414.6 198.7 416.1 200.4 416.1 202.3C416.1 203.5 415.5 204.3 415 204.7C415.7 205.2 416.4 206.1 416.4 207.5C416.4 209.8 414.5 211.3 412.1 211.3C409.7 211.3 407.8 209.8 407.8 207.5C407.6 206.2 408.3 205.3 409 204.8ZM411.9 208.9C412.7 208.9 413.3 208.3 413.3 207.5C413.3 206.7 412.7 206.1 411.9 206.1C411.1 206.1 410.5 206.7 410.5 207.5C410.5 208.3 411.1 208.9 411.9 208.9ZM413.1 202.4C413.1 201.7 412.6 201.2 411.9 201.2C411.2 201.2 410.7 201.7 410.7 202.4C410.7 203.1 411.2 203.6 411.9 203.6C412.6 203.6 413.1 203 413.1 202.4Z'
          fill='#fff' />
          <rect width='8.2' height='12.5' fill='#000' fillOpacity='0' transform='translate(50 241.9)'
          />
          <path d='M50 252.1C50 252 50 251.9 50.1 251.8L54.4 247C54.9 246.5 55.1 246 55.1 245.5C55.1 244.8 54.7 244.3 54 244.3C53.3 244.3 52.9 244.7 52.8 245.7C52.8 245.8 52.7 245.9 52.6 245.9L50.2 245.5C50.1 245.5 50 245.4 50.1 245.3C50.2 243.4 51.8 241.9 54.2 241.9C56.6 241.9 58.1 243.4 58.1 245.5C58.1 246.8 57.6 247.7 56.8 248.6L53.9 251.8H58C58.1 251.8 58.2 251.9 58.2 252V254.2C58.2 254.3 58.1 254.4 58 254.4H50.3C50.2 254.4 50.1 254.3 50.1 254.2V252.1H50Z'
          fill='#fff' />
          <path d='M106.3 172.7C107 178.2 111.8 182.6 117.5 182.6C123.7 182.6 128.8 177.5 128.8 171.3C128.8 165.6 124.6 160.9 119.1 160.1H116.1C111 160.7 106.9 164.7 106.3 169.8V172.7Z'
          fill='#fff' />
          <path d='M468.7 172.7C469.4 178.2 474.2 182.6 479.9 182.6C486.1 182.6 491.2 177.5 491.2 171.3C491.2 165.6 487 160.9 481.5 160.1H478.5C473.4 160.7 469.3 164.7 468.7 169.8V172.7Z'
          fill='#fff' stroke='#fff' strokeMiterlimit='10' />
          <path d='M481.5 207.3V198.4L480 200.9L478.5 198.4V207.3C469.2 208.1 461.9 215.9 461.9 225.4C461.9 234.9 469.2 242.7 478.5 243.5V322.9H481.5V243.5C490.8 242.7 498.1 234.9 498.1 225.4C498.1 215.9 490.8 208.1 481.5 207.3ZM481.5 240.5C481 240.5 480.5 240.6 480 240.6C479.5 240.6 479 240.6 478.5 240.5C470.9 239.7 464.9 233.3 464.9 225.4C464.9 217.5 470.9 211.1 478.5 210.3C479 210.3 479.5 210.2 480 210.2C480.5 210.2 481 210.2 481.5 210.3C489.1 211.1 495.1 217.5 495.1 225.4C495.1 233.3 489.1 239.7 481.5 240.5Z'
          fill='#fff' />
          <path d='M376.842 327.256L375.57 335.8H374.418L373.482 330.256H373.458L372.534 335.8H371.382L370.11 327.256H371.406L372.018 332.68H372.042L373.002 327.256H373.938L374.934 332.812H374.958L375.546 327.256H376.842ZM377.395 329.272C377.395 328.928 377.455 328.624 377.575 328.36C377.695 328.096 377.855 327.876 378.055 327.7C378.247 327.532 378.463 327.404 378.703 327.316C378.951 327.228 379.199 327.184 379.447 327.184C379.695 327.184 379.939 327.228 380.179 327.316C380.427 327.404 380.651 327.532 380.851 327.7C381.043 327.876 381.199 328.096 381.319 328.36C381.439 328.624 381.499 328.928 381.499 329.272V333.784C381.499 334.144 381.439 334.452 381.319 334.708C381.199 334.964 381.043 335.176 380.851 335.344C380.651 335.52 380.427 335.652 380.179 335.74C379.939 335.828 379.695 335.872 379.447 335.872C379.199 335.872 378.951 335.828 378.703 335.74C378.463 335.652 378.247 335.52 378.055 335.344C377.855 335.176 377.695 334.964 377.575 334.708C377.455 334.452 377.395 334.144 377.395 333.784V329.272ZM378.619 333.784C378.619 334.08 378.699 334.3 378.859 334.444C379.027 334.58 379.223 334.648 379.447 334.648C379.671 334.648 379.863 334.58 380.023 334.444C380.191 334.3 380.275 334.08 380.275 333.784V329.272C380.275 328.976 380.191 328.76 380.023 328.624C379.863 328.48 379.671 328.408 379.447 328.408C379.223 328.408 379.027 328.48 378.859 328.624C378.699 328.76 378.619 328.976 378.619 329.272V333.784ZM383.801 328.408V331.072H384.497C384.713 331.072 384.885 331.044 385.013 330.988C385.141 330.924 385.241 330.836 385.313 330.724C385.377 330.612 385.421 330.476 385.445 330.316C385.469 330.148 385.481 329.956 385.481 329.74C385.481 329.524 385.469 329.336 385.445 329.176C385.421 329.008 385.373 328.864 385.301 328.744C385.149 328.52 384.861 328.408 384.437 328.408H383.801ZM382.577 335.8V327.256H384.545C385.985 327.256 386.705 328.092 386.705 329.764C386.705 330.268 386.625 330.696 386.465 331.048C386.313 331.4 386.041 331.684 385.649 331.9L386.969 335.8H385.673L384.533 332.152H383.801V335.8H382.577ZM388.279 335.8V328.408H386.863V327.256H390.919V328.408H389.503V335.8H388.279ZM393.614 329.272C393.614 328.928 393.674 328.624 393.794 328.36C393.914 328.096 394.074 327.876 394.274 327.7C394.466 327.532 394.682 327.404 394.922 327.316C395.17 327.228 395.418 327.184 395.666 327.184C395.914 327.184 396.158 327.228 396.398 327.316C396.646 327.404 396.87 327.532 397.07 327.7C397.262 327.876 397.418 328.096 397.538 328.36C397.658 328.624 397.718 328.928 397.718 329.272V333.784C397.718 334.144 397.658 334.452 397.538 334.708C397.418 334.964 397.262 335.176 397.07 335.344C396.87 335.52 396.646 335.652 396.398 335.74C396.158 335.828 395.914 335.872 395.666 335.872C395.418 335.872 395.17 335.828 394.922 335.74C394.682 335.652 394.466 335.52 394.274 335.344C394.074 335.176 393.914 334.964 393.794 334.708C393.674 334.452 393.614 334.144 393.614 333.784V329.272ZM394.838 333.784C394.838 334.08 394.918 334.3 395.078 334.444C395.246 334.58 395.442 334.648 395.666 334.648C395.89 334.648 396.082 334.58 396.242 334.444C396.41 334.3 396.494 334.08 396.494 333.784V329.272C396.494 328.976 396.41 328.76 396.242 328.624C396.082 328.48 395.89 328.408 395.666 328.408C395.442 328.408 395.246 328.48 395.078 328.624C394.918 328.76 394.838 328.976 394.838 329.272V333.784ZM402.755 327.256V333.88C402.755 334.16 402.703 334.42 402.599 334.66C402.503 334.892 402.363 335.1 402.179 335.284C401.995 335.468 401.783 335.612 401.543 335.716C401.303 335.82 401.047 335.872 400.775 335.872C400.503 335.872 400.247 335.82 400.007 335.716C399.775 335.612 399.567 335.468 399.383 335.284C399.199 335.1 399.055 334.892 398.951 334.66C398.847 334.42 398.795 334.16 398.795 333.88V327.256H400.019V333.76C400.019 334.064 400.091 334.288 400.235 334.432C400.379 334.576 400.559 334.648 400.775 334.648C400.991 334.648 401.171 334.576 401.315 334.432C401.459 334.288 401.531 334.064 401.531 333.76V327.256H402.755ZM404.709 335.8V328.408H403.293V327.256H407.349V328.408H405.933V335.8H404.709Z'
          fill='#fff' />
          <path d='M471.499 327.256L470.227 335.8H469.075L468.139 330.256H468.115L467.191 335.8H466.039L464.767 327.256H466.063L466.675 332.68H466.699L467.659 327.256H468.595L469.591 332.812H469.615L470.203 327.256H471.499ZM474.373 332.812L473.773 329.716H473.749L473.149 332.812H474.373ZM471.349 335.8L473.257 327.256H474.277L476.185 335.8H474.961L474.601 333.964H472.933L472.573 335.8H471.349ZM480.748 329.716H479.524V329.44C479.524 329.16 479.456 328.92 479.32 328.72C479.192 328.512 478.972 328.408 478.66 328.408C478.492 328.408 478.356 328.44 478.252 328.504C478.148 328.568 478.064 328.648 478 328.744C477.936 328.848 477.892 328.968 477.868 329.104C477.844 329.232 477.832 329.368 477.832 329.512C477.832 329.68 477.836 329.82 477.844 329.932C477.86 330.044 477.892 330.144 477.94 330.232C477.988 330.32 478.056 330.396 478.144 330.46C478.24 330.524 478.368 330.588 478.528 330.652L479.464 331.024C479.736 331.128 479.956 331.252 480.124 331.396C480.292 331.532 480.424 331.692 480.52 331.876C480.608 332.068 480.668 332.288 480.7 332.536C480.732 332.776 480.748 333.052 480.748 333.364C480.748 333.724 480.712 334.06 480.64 334.372C480.568 334.676 480.452 334.936 480.292 335.152C480.124 335.376 479.904 335.552 479.632 335.68C479.36 335.808 479.028 335.872 478.636 335.872C478.34 335.872 478.064 335.82 477.808 335.716C477.552 335.612 477.332 335.468 477.148 335.284C476.964 335.1 476.816 334.888 476.704 334.648C476.6 334.4 476.548 334.132 476.548 333.844V333.388H477.772V333.772C477.772 333.996 477.836 334.2 477.964 334.384C478.1 334.56 478.324 334.648 478.636 334.648C478.844 334.648 479.004 334.62 479.116 334.564C479.236 334.5 479.328 334.412 479.392 334.3C479.456 334.188 479.492 334.056 479.5 333.904C479.516 333.744 479.524 333.568 479.524 333.376C479.524 333.152 479.516 332.968 479.5 332.824C479.484 332.68 479.452 332.564 479.404 332.476C479.348 332.388 479.272 332.316 479.176 332.26C479.088 332.204 478.968 332.144 478.816 332.08L477.94 331.72C477.412 331.504 477.056 331.22 476.872 330.868C476.696 330.508 476.608 330.06 476.608 329.524C476.608 329.204 476.652 328.9 476.74 328.612C476.828 328.324 476.96 328.076 477.136 327.868C477.304 327.66 477.516 327.496 477.772 327.376C478.036 327.248 478.348 327.184 478.708 327.184C479.012 327.184 479.288 327.24 479.536 327.352C479.792 327.464 480.012 327.612 480.196 327.796C480.564 328.18 480.748 328.62 480.748 329.116V329.716ZM482.467 335.8V328.408H481.051V327.256H485.107V328.408H483.691V335.8H482.467ZM485.647 335.8V327.256H489.295V328.408H486.871V330.916H488.983V332.068H486.871V334.576H489.295V335.8H485.647ZM492.243 329.272C492.243 328.928 492.303 328.624 492.423 328.36C492.543 328.096 492.703 327.876 492.903 327.7C493.095 327.532 493.311 327.404 493.551 327.316C493.799 327.228 494.047 327.184 494.295 327.184C494.543 327.184 494.787 327.228 495.027 327.316C495.275 327.404 495.499 327.532 495.699 327.7C495.891 327.876 496.047 328.096 496.167 328.36C496.287 328.624 496.347 328.928 496.347 329.272V333.784C496.347 334.144 496.287 334.452 496.167 334.708C496.047 334.964 495.891 335.176 495.699 335.344C495.499 335.52 495.275 335.652 495.027 335.74C494.787 335.828 494.543 335.872 494.295 335.872C494.047 335.872 493.799 335.828 493.551 335.74C493.311 335.652 493.095 335.52 492.903 335.344C492.703 335.176 492.543 334.964 492.423 334.708C492.303 334.452 492.243 334.144 492.243 333.784V329.272ZM493.467 333.784C493.467 334.08 493.547 334.3 493.707 334.444C493.875 334.58 494.071 334.648 494.295 334.648C494.519 334.648 494.711 334.58 494.871 334.444C495.039 334.3 495.123 334.08 495.123 333.784V329.272C495.123 328.976 495.039 328.76 494.871 328.624C494.711 328.48 494.519 328.408 494.295 328.408C494.071 328.408 493.875 328.48 493.707 328.624C493.547 328.76 493.467 328.976 493.467 329.272V333.784ZM501.384 327.256V333.88C501.384 334.16 501.332 334.42 501.228 334.66C501.132 334.892 500.992 335.1 500.808 335.284C500.624 335.468 500.412 335.612 500.172 335.716C499.932 335.82 499.676 335.872 499.404 335.872C499.132 335.872 498.876 335.82 498.636 335.716C498.404 335.612 498.196 335.468 498.012 335.284C497.828 335.1 497.684 334.892 497.58 334.66C497.476 334.42 497.424 334.16 497.424 333.88V327.256H498.648V333.76C498.648 334.064 498.72 334.288 498.864 334.432C499.008 334.576 499.188 334.648 499.404 334.648C499.62 334.648 499.8 334.576 499.944 334.432C500.088 334.288 500.16 334.064 500.16 333.76V327.256H501.384ZM503.338 335.8V328.408H501.922V327.256H505.978V328.408H504.562V335.8H503.338Z'
          fill='#fff' />
          <path d='M99.6237 327.256L98.3517 335.8H97.1997L96.2637 330.256H96.2397L95.3157 335.8H94.1637L92.8917 327.256H94.1877L94.7997 332.68H94.8237L95.7837 327.256H96.7197L97.7157 332.812H97.7397L98.3277 327.256H99.6237ZM102.498 332.812L101.898 329.716H101.874L101.274 332.812H102.498ZM99.4737 335.8L101.382 327.256H102.402L104.31 335.8H103.086L102.726 333.964H101.058L100.698 335.8H99.4737ZM105.06 335.8V328.408H103.644V327.256H107.7V328.408H106.284V335.8H105.06ZM108.241 335.8V327.256H111.889V328.408H109.465V330.916H111.577V332.068H109.465V334.576H111.889V335.8H108.241ZM113.906 328.408V331.072H114.602C114.818 331.072 114.99 331.044 115.118 330.988C115.246 330.924 115.346 330.836 115.418 330.724C115.482 330.612 115.526 330.476 115.55 330.316C115.574 330.148 115.586 329.956 115.586 329.74C115.586 329.524 115.574 329.336 115.55 329.176C115.526 329.008 115.478 328.864 115.406 328.744C115.254 328.52 114.966 328.408 114.542 328.408H113.906ZM112.682 335.8V327.256H114.65C116.09 327.256 116.81 328.092 116.81 329.764C116.81 330.268 116.73 330.696 116.57 331.048C116.418 331.4 116.146 331.684 115.754 331.9L117.074 335.8H115.778L114.638 332.152H113.906V335.8H112.682ZM120.054 335.8V327.256H121.278V335.8H120.054ZM122.419 335.8V327.256H123.595L125.443 332.404H125.467V327.256H126.691V335.8H125.539L123.667 330.664H123.643V335.8H122.419Z'
          fill='#fff' />
          <path d='M303.7 241.1C312.205 241.1 319.1 234.205 319.1 225.7C319.1 217.195 312.205 210.3 303.7 210.3C295.195 210.3 288.3 217.195 288.3 225.7C288.3 234.205 295.195 241.1 303.7 241.1Z'
          fill='#fff' />
          <path d='M480 241.1C488.505 241.1 495.4 234.205 495.4 225.7C495.4 217.195 488.505 210.3 480 210.3C471.495 210.3 464.6 217.195 464.6 225.7C464.6 234.205 471.495 241.1 480 241.1Z'
          fill='#fff' />
          <path d='M455.3 241.1H404V267.3H455.3V241.1Z' fill='#fff' />
          <path d='M481.9 252.7H390.4V256.1H481.9V252.7Z' fill='#fff' />
          <path d='M424.131 255.531V256.059C424.131 256.323 424.079 256.575 423.975 256.815C423.879 257.047 423.743 257.255 423.567 257.439C423.391 257.623 423.183 257.771 422.943 257.883C422.711 257.987 422.459 258.039 422.187 258.039C421.955 258.039 421.719 258.007 421.479 257.943C421.239 257.879 421.023 257.767 420.831 257.607C420.639 257.447 420.479 257.243 420.351 256.995C420.231 256.739 420.171 256.415 420.171 256.023V251.319C420.171 251.039 420.219 250.779 420.315 250.539C420.411 250.299 420.547 250.091 420.723 249.915C420.899 249.739 421.107 249.603 421.347 249.507C421.595 249.403 421.867 249.351 422.163 249.351C422.739 249.351 423.207 249.539 423.567 249.915C423.743 250.099 423.879 250.319 423.975 250.575C424.079 250.823 424.131 251.095 424.131 251.391V251.871H422.907V251.463C422.907 251.223 422.839 251.015 422.703 250.839C422.567 250.663 422.383 250.575 422.151 250.575C421.847 250.575 421.643 250.671 421.539 250.863C421.443 251.047 421.395 251.283 421.395 251.571V255.939C421.395 256.187 421.447 256.395 421.551 256.563C421.663 256.731 421.859 256.815 422.139 256.815C422.219 256.815 422.303 256.803 422.391 256.779C422.487 256.747 422.575 256.699 422.655 256.635C422.727 256.571 422.787 256.483 422.835 256.371C422.883 256.259 422.907 256.119 422.907 255.951V255.531H424.131ZM425.13 257.967V249.423H426.354V253.083H427.866V249.423H429.09V257.967H427.866V254.163H426.354V257.967H425.13ZM430.275 257.967V249.423H431.499V257.967H430.275ZM432.688 257.967V249.423H433.912V256.743H436.336V257.967H432.688ZM437.13 257.967V249.423H438.354V256.743H440.778V257.967H437.13Z'
          fill='#000' />
          <path d='M390.4 320.9L386.3 319.5L390.4 326.3L394.6 319.5L390.4 320.9Z'
          fill='#000' stroke='#fff' strokeMiterlimit='10' />
          <path d='M480 320.9L475.9 319.5L480 326.3L484.1 319.5L480 320.9Z' fill='#000'
          stroke='#fff' strokeMiterlimit='10' />
          <path d='M113 303.1C109.3 303.1 106.2 305.8 105.6 309.3H64.2C63.5 304.3 59.5 300.2 54.5 299.6V269H51.5V299.6C46 300.3 41.7 305.1 41.7 310.8C41.7 317 46.8 322.1 53 322.1C58.7 322.1 63.5 317.8 64.2 312.3H105.7C106.5 315.7 109.5 318.2 113 318.2C116.5 318.2 119.6 315.7 120.3 312.3L120.4 309.3C119.8 305.8 116.7 303.1 113 303.1Z'
          fill='#fff' />
          <path d='M54.5 237.5C60 236.8 64.3 232 64.3 226.3C64.3 220.6 60 215.8 54.5 215.1V50.8H66.4V178.5H116V188.5L117.6 189.1L119 188.6V178.5H158.6V239.2C152.9 239.8 148.5 244.6 148.5 250.5C148.5 253.7 149.8 256.5 151.9 258.6V258.8H152.1C153.8 260.4 156.1 261.5 158.6 261.8V267.3H154.3C153.7 261.6 148.9 257.2 143 257.2C137.1 257.2 132.3 261.7 131.7 267.3H119V243.5C128.3 242.7 135.6 234.9 135.6 225.4C135.6 215.9 128.3 208.1 119 207.3V198.3L117.6 200.6L116 197.9V207.3C106.7 208.1 99.4 215.9 99.4 225.4C99.4 234.9 106.7 242.7 116 243.5V267.3H82V270.3H131.8C132.7 275.7 137.4 279.9 143 279.9C148.6 279.9 153.3 275.7 154.2 270.3H158.6V287V288.5L161.6 285.5V270.3H198.9C200.2 275.2 204.6 278.9 209.9 278.9C216.1 278.9 221.2 273.8 221.2 267.6C221.2 261.9 217 257.2 211.5 256.4V217.1C213.1 217.3 214.5 218 215.5 219C217.8 221.4 217.7 225.4 217.7 225.4L217.6 227H254.2V242.1C248.8 243 244.7 247.7 244.7 253.3C244.7 259.5 249.8 264.6 256 264.6C261.6 264.6 266.3 260.4 267.2 255L335.2 255.5C335.8 261.2 340.6 265.6 346.5 265.6C352.3 265.6 357.1 261.2 357.7 255.6L389.1 255.8L388.9 325.1H392V216.6C397.5 215.8 401.7 211.1 401.7 205.4C401.7 199.7 397.5 195 392 194.2V158.2L390.4 157.7L389 158.2V194.2C383.4 194.9 379 199.7 379 205.4C379 211.2 383.4 216 389 216.6V252.5L357.6 252.3C356.7 246.9 352 242.8 346.4 242.8C340.8 242.8 336.2 246.9 335.2 252.2L305.1 252V243.4C314.6 242.8 322.2 234.9 322.2 225.3C322.2 215.7 314.6 207.8 305.1 207.2V197.8L303.6 200.3L302.1 197.8V207.2C293 208.2 285.9 215.9 285.9 225.2C285.9 234.6 293 242.3 302.1 243.2V251.8L267.2 251.6C266.6 246.3 262.3 242.1 257 241.6L257.2 223.6H220.7C220.5 221.8 219.9 218.8 217.8 216.6C216.2 215 214.2 214 211.6 213.7V158.3L210 157.8L208.6 158.4V214C206.1 214.3 204.1 215.2 202.6 216.9C200.6 219.1 200.1 222.1 200 223.9H176.9V178.6H190.6V171.7V139H180.9V35.7H66.4V47.9H51.5V215.1C46 215.8 41.7 220.6 41.7 226.3C41.7 232 46 236.8 51.5 237.5H54.5ZM116 240.5C108.4 239.7 102.4 233.3 102.4 225.4C102.4 217.5 108.4 211.1 116 210.3C116.5 210.3 117 210.2 117.5 210.2C118 210.2 118.5 210.2 119 210.3C126.6 211.1 132.6 217.5 132.6 225.4C132.6 233.3 126.6 239.7 119 240.5C118.5 240.5 118 240.6 117.5 240.6C117 240.6 116.5 240.5 116 240.5ZM141.1 138.9V175.6L69.5 175.5V38.7H177.9V138.9H141.1V138.9ZM208.6 256.3C203 257 198.7 261.6 198.6 267.3H161.6V261.7C167 260.8 171.2 256.1 171.2 250.5C171.2 244.9 167 240.2 161.6 239.3V178.6H173.8V226.9H201.5H203.2L203 225.3C203 225.3 202.6 221.3 204.8 218.9C205.7 217.9 207 217.3 208.6 217V256.3V256.3ZM304.1 240.6C303.5 240.6 302.8 240.5 302.2 240.5C294.8 239.6 289 233.2 289 225.5C289 217.8 294.8 211.4 302.2 210.5C302.8 210.4 303.5 210.4 304.1 210.4C304.5 210.4 304.8 210.4 305.2 210.5C313 211.1 319.3 217.6 319.3 225.6C319.3 233.6 313.1 240.1 305.2 240.7C304.9 240.5 304.5 240.6 304.1 240.6Z'
          fill='#fff' />
          <path d='M54.5 268.8H30' stroke='#fff' strokeWidth='3' strokeMiterlimit='10'
          />
          <path d='M54 202.4H30' stroke='#fff' strokeWidth='3' strokeMiterlimit='10'
          />
          <path d='M31.5 201.1V269.4' stroke='#fff' strokeWidth='3' strokeMiterlimit='10'
          />
          <path d='M82 270.3V225.7' stroke='#fff' strokeWidth='3' strokeMiterlimit='10'
          />
          <path d='M54 225.7H83.5' stroke='#fff' strokeWidth='3' strokeMiterlimit='10'
          />
          <path d='M151.941 164.88V156.336H153.165V159.996H154.677V156.336H155.901V164.88H154.677V161.076H153.165V164.88H151.941ZM157.05 164.88V156.336H160.698V157.488H158.274V159.996H160.386V161.148H158.274V163.656H160.698V164.88H157.05ZM162.715 157.488V160.152H163.411C163.627 160.152 163.799 160.124 163.927 160.068C164.055 160.004 164.155 159.916 164.227 159.804C164.291 159.692 164.335 159.556 164.359 159.396C164.383 159.228 164.395 159.036 164.395 158.82C164.395 158.604 164.383 158.416 164.359 158.256C164.335 158.088 164.287 157.944 164.215 157.824C164.063 157.6 163.775 157.488 163.351 157.488H162.715ZM161.491 164.88V156.336H163.459C164.899 156.336 165.619 157.172 165.619 158.844C165.619 159.348 165.539 159.776 165.379 160.128C165.227 160.48 164.955 160.764 164.563 160.98L165.883 164.88H164.587L163.447 161.232H162.715V164.88H161.491ZM166.601 164.88V156.336H167.777L169.349 160.86H169.373L170.933 156.336H172.121V164.88H170.897V159.684H170.873L169.661 163.356H169.049L167.849 159.684H167.825V164.88H166.601ZM177.229 158.796H176.005V158.52C176.005 158.24 175.937 158 175.801 157.8C175.673 157.592 175.453 157.488 175.141 157.488C174.973 157.488 174.837 157.52 174.733 157.584C174.629 157.648 174.545 157.728 174.481 157.824C174.417 157.928 174.373 158.048 174.349 158.184C174.325 158.312 174.313 158.448 174.313 158.592C174.313 158.76 174.317 158.9 174.325 159.012C174.341 159.124 174.373 159.224 174.421 159.312C174.469 159.4 174.537 159.476 174.625 159.54C174.721 159.604 174.849 159.668 175.009 159.732L175.945 160.104C176.217 160.208 176.437 160.332 176.605 160.476C176.773 160.612 176.905 160.772 177.001 160.956C177.089 161.148 177.149 161.368 177.181 161.616C177.213 161.856 177.229 162.132 177.229 162.444C177.229 162.804 177.193 163.14 177.121 163.452C177.049 163.756 176.933 164.016 176.773 164.232C176.605 164.456 176.385 164.632 176.113 164.76C175.841 164.888 175.509 164.952 175.117 164.952C174.821 164.952 174.545 164.9 174.289 164.796C174.033 164.692 173.813 164.548 173.629 164.364C173.445 164.18 173.297 163.968 173.185 163.728C173.081 163.48 173.029 163.212 173.029 162.924V162.468H174.253V162.852C174.253 163.076 174.317 163.28 174.445 163.464C174.581 163.64 174.805 163.728 175.117 163.728C175.325 163.728 175.485 163.7 175.597 163.644C175.717 163.58 175.809 163.492 175.873 163.38C175.937 163.268 175.973 163.136 175.981 162.984C175.997 162.824 176.005 162.648 176.005 162.456C176.005 162.232 175.997 162.048 175.981 161.904C175.965 161.76 175.933 161.644 175.885 161.556C175.829 161.468 175.753 161.396 175.657 161.34C175.569 161.284 175.449 161.224 175.297 161.16L174.421 160.8C173.893 160.584 173.537 160.3 173.353 159.948C173.177 159.588 173.089 159.14 173.089 158.604C173.089 158.284 173.133 157.98 173.221 157.692C173.309 157.404 173.441 157.156 173.617 156.948C173.785 156.74 173.997 156.576 174.253 156.456C174.517 156.328 174.829 156.264 175.189 156.264C175.493 156.264 175.769 156.32 176.017 156.432C176.273 156.544 176.493 156.692 176.677 156.876C177.045 157.26 177.229 157.7 177.229 158.196V158.796Z'
          fill='#000' />
          <path d='M101.42 115.153V86.6732H105.5V98.8732H110.54V86.6732H114.62V115.153H110.54V102.473H105.5V115.153H101.42ZM118.451 115.153V86.6732H122.531V111.073H130.611V115.153H118.451ZM132.967 115.153V90.5132H128.247V86.6732H141.767V90.5132H137.047V115.153H132.967Z'
          fill='#fff' />
          <path d='M267.877 115.153V86.6732H271.797L277.037 101.753H277.117L282.317 86.6732H286.277V115.153H282.197V97.8332H282.117L278.077 110.073H276.037L272.037 97.8332H271.957V115.153H267.877ZM298.344 105.193L296.344 94.8732H296.264L294.264 105.193H298.344ZM288.264 115.153L294.624 86.6732H298.024L304.384 115.153H300.304L299.104 109.033H293.544L292.344 115.153H288.264ZM319.593 94.8732H315.513V93.9532C315.513 93.0199 315.286 92.2199 314.833 91.5532C314.406 90.8599 313.673 90.5132 312.633 90.5132C312.073 90.5132 311.619 90.6199 311.273 90.8332C310.926 91.0465 310.646 91.3132 310.433 91.6332C310.219 91.9799 310.073 92.3799 309.993 92.8332C309.913 93.2599 309.873 93.7132 309.873 94.1932C309.873 94.7532 309.886 95.2199 309.913 95.5932C309.966 95.9665 310.073 96.2999 310.233 96.5932C310.393 96.8865 310.619 97.1399 310.913 97.3532C311.233 97.5665 311.659 97.7799 312.193 97.9932L315.313 99.2332C316.219 99.5799 316.953 99.9932 317.513 100.473C318.073 100.927 318.513 101.46 318.833 102.073C319.126 102.713 319.326 103.447 319.433 104.273C319.539 105.073 319.593 105.993 319.593 107.033C319.593 108.233 319.473 109.353 319.233 110.393C318.993 111.407 318.606 112.273 318.073 112.993C317.513 113.74 316.779 114.327 315.873 114.753C314.966 115.18 313.859 115.393 312.553 115.393C311.566 115.393 310.646 115.22 309.793 114.873C308.939 114.527 308.206 114.047 307.593 113.433C306.979 112.82 306.486 112.113 306.113 111.313C305.766 110.487 305.593 109.593 305.593 108.633V107.113H309.673V108.393C309.673 109.14 309.886 109.82 310.313 110.433C310.766 111.02 311.513 111.313 312.553 111.313C313.246 111.313 313.779 111.22 314.153 111.033C314.553 110.82 314.859 110.527 315.073 110.153C315.286 109.78 315.406 109.34 315.433 108.833C315.486 108.3 315.513 107.713 315.513 107.073C315.513 106.327 315.486 105.713 315.433 105.233C315.379 104.753 315.273 104.367 315.113 104.073C314.926 103.78 314.673 103.54 314.353 103.353C314.059 103.167 313.659 102.967 313.153 102.753L310.233 101.553C308.473 100.833 307.286 99.8865 306.673 98.7132C306.086 97.5132 305.793 96.0199 305.793 94.2332C305.793 93.1665 305.939 92.1532 306.233 91.1932C306.526 90.2332 306.966 89.4065 307.553 88.7132C308.113 88.0199 308.819 87.4732 309.673 87.0732C310.553 86.6465 311.593 86.4332 312.793 86.4332C313.806 86.4332 314.726 86.6199 315.553 86.9932C316.406 87.3665 317.139 87.8599 317.753 88.4732C318.979 89.7532 319.593 91.2199 319.593 92.8732V94.8732ZM322.643 115.153V86.6732H326.723V98.8732H331.763V86.6732H335.843V115.153H331.763V102.473H326.723V115.153H322.643Z'
          fill='#fff' />
          <path d='M454.877 115.153V86.6732H460.837C462.144 86.6732 463.25 86.8732 464.157 87.2732C465.09 87.6732 465.85 88.2065 466.437 88.8732C467.024 89.5399 467.437 90.3132 467.677 91.1932C467.944 92.0465 468.077 92.9399 468.077 93.8732V94.9132C468.077 95.6865 468.01 96.3399 467.877 96.8732C467.77 97.4065 467.597 97.8732 467.357 98.2732C466.904 99.0199 466.21 99.6599 465.277 100.193C466.237 100.647 466.944 101.313 467.397 102.193C467.85 103.073 468.077 104.273 468.077 105.793V107.393C468.077 109.9 467.464 111.82 466.237 113.153C465.037 114.487 463.104 115.153 460.437 115.153H454.877ZM458.957 101.953V111.073H460.717C461.544 111.073 462.184 110.953 462.637 110.713C463.117 110.473 463.477 110.14 463.717 109.713C463.957 109.287 464.104 108.78 464.157 108.193C464.21 107.607 464.237 106.967 464.237 106.273C464.237 105.553 464.197 104.927 464.117 104.393C464.037 103.86 463.877 103.407 463.637 103.033C463.37 102.66 463.01 102.393 462.557 102.233C462.104 102.047 461.504 101.953 460.757 101.953H458.957ZM458.957 90.5132V98.3532H460.797C462.157 98.3532 463.064 98.0199 463.517 97.3532C463.997 96.6599 464.237 95.6599 464.237 94.3532C464.237 93.0732 463.97 92.1132 463.437 91.4732C462.93 90.8332 461.997 90.5132 460.637 90.5132H458.957ZM471.668 93.3932C471.668 92.2465 471.868 91.2332 472.268 90.3532C472.668 89.4732 473.202 88.7399 473.868 88.1532C474.508 87.5932 475.228 87.1665 476.028 86.8732C476.855 86.5799 477.682 86.4332 478.508 86.4332C479.335 86.4332 480.148 86.5799 480.948 86.8732C481.775 87.1665 482.522 87.5932 483.188 88.1532C483.828 88.7399 484.348 89.4732 484.748 90.3532C485.148 91.2332 485.348 92.2465 485.348 93.3932V108.433C485.348 109.633 485.148 110.66 484.748 111.513C484.348 112.367 483.828 113.073 483.188 113.633C482.522 114.22 481.775 114.66 480.948 114.953C480.148 115.247 479.335 115.393 478.508 115.393C477.682 115.393 476.855 115.247 476.028 114.953C475.228 114.66 474.508 114.22 473.868 113.633C473.202 113.073 472.668 112.367 472.268 111.513C471.868 110.66 471.668 109.633 471.668 108.433V93.3932ZM475.748 108.433C475.748 109.42 476.015 110.153 476.548 110.633C477.108 111.087 477.762 111.313 478.508 111.313C479.255 111.313 479.895 111.087 480.428 110.633C480.988 110.153 481.268 109.42 481.268 108.433V93.3932C481.268 92.4065 480.988 91.6865 480.428 91.2332C479.895 90.7532 479.255 90.5132 478.508 90.5132C477.762 90.5132 477.108 90.7532 476.548 91.2332C476.015 91.6865 475.748 92.4065 475.748 93.3932V108.433ZM489.06 115.153V86.6732H493.14V115.153H489.06ZM497.104 115.153V86.6732H501.184V111.073H509.264V115.153H497.104Z'
          fill='#fff' />
          <rect width='291.1' height='42.5' fill='#000' fillOpacity='0' transform='translate(120.4 268.7)'
          />
          <rect width='291.1' height='42.5' fill='#000' fillOpacity='0' transform='translate(120.4 268.7)'
          />
          <path d='M120.4 311.2H122.9' stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10'
          />
          <path d='M124.9 311.2H376.5' stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10'
          strokeDasharray='5.01 5.01' />
          <path d='M377.5 311.2H380C380 311.2 380.1 310.2 380.5 308.7' stroke='#00AEEF'
          strokeWidth='3' strokeMiterlimit='10' />
          <path d='M381.1 307C382.3 304.2 384.9 301.1 390.5 301.1C396.6 301.1 399 304.9 399.9 307.8'
          stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10' strokeDasharray='4.48 4.48'
          />
          <path d='M400.1 308.7C400.4 310.1 400.4 311.2 400.4 311.2H402.9' stroke='#00AEEF'
          strokeWidth='3' strokeMiterlimit='10' />
          <path d='M404.3 311.2H408.3' stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10'
          strokeDasharray='3.38 3.38' />
          <path d='M409 311.2H411.5V308.7' stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10'
          />
          <path d='M411.5 306.7V272.2' stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10'
          strokeDasharray='5.06 5.06' />
          <path d='M411.5 271.2V268.7' stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10'
          />
          <path d='M164.7 317.3C168.069 317.3 170.8 314.569 170.8 311.2C170.8 307.831 168.069 305.1 164.7 305.1C161.331 305.1 158.6 307.831 158.6 311.2C158.6 314.569 161.331 317.3 164.7 317.3Z'
          fill='#00AEEF' stroke='#fff' strokeWidth='3' strokeMiterlimit='10' />
          <path d='M410.9 291.6C414.269 291.6 417 288.869 417 285.5C417 282.131 414.269 279.4 410.9 279.4C407.531 279.4 404.8 282.131 404.8 285.5C404.8 288.869 407.531 291.6 410.9 291.6Z'
          fill='#00AEEF' stroke='#fff' strokeWidth='3' strokeMiterlimit='10' />
          <path d='M404.5 284.8H389' stroke='#fff' strokeWidth='3' strokeMiterlimit='10'
          />
          <path d='M450 269.7V270.7' stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10'
          />
          <path d='M450 272.8V309.1' stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10'
          strokeDasharray='2.07 2.07' />
          <path d='M450 310.1V311.1H451' stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10'
          />
          <path d='M453 311.1H476.5' stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10'
          strokeDasharray='2.04 2.04' />
          <path d='M477.5 311.1H478.5' stroke='#00AEEF' strokeWidth='3' strokeMiterlimit='10'
          />
          <circle id="1" cx="52.5" cy="310.5" r="6.5" fill={valvesStatus[0] === 0 ? closedColor : openColor} />
          <circle id="2" cx="52.5" cy="226.5" r="6.5" fill={valvesStatus[1] === 0 ? closedColor : openColor}/>
          <circle id="3" cx="142.5" cy="268.5" r="6.5" fill={valvesStatus[2] === 0 ? closedColor : openColor} />
          <circle id="4" cx="160" cy="250" r="7" fill={valvesStatus[3] === 0 ? closedColor : openColor} />
          <circle id="5" cx="210.5" cy="268.5" r="6.5" fill={valvesStatus[4] === 0 ? closedColor : openColor} />
          <circle id="6" cx="255.5" cy="253.5" r="6.5" fill={valvesStatus[5] === 0 ? closedColor : openColor} />
          <circle id="7" cx="346.5" cy="254.5" r="6.5" fill={valvesStatus[6] === 0 ? closedColor : openColor} />
          <circle id="8" cx="390.5" cy="205.5" r="6.5" fill={valvesStatus[7] === 0 ? closedColor : openColor} />

          <circle id="p1" cx="117" cy="225" r="6.5" fill={valvesStatus[12] === 0 ? closedColor : openColor}/>

          <polygon points="60,30 90,90 30,90">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 60 70"
              to="360 60 70"
              dur="10s"
              repeatCount="indefinite"
            />
          </polygon>
      </svg>
      </div>
    )
  }
}
