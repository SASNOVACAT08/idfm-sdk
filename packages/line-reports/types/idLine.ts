export enum IdLineRER {
  /** 
   * RER A
   */
  A  = 'line:IDFM:C01742',
  /**
   * RER B
   */
  B  = 'line:IDFM:C01743',
  /**
   * RER C
   */
  C  = 'line:IDFM:C01727',
  /**
   * RER D
   */
  
  D  = 'line:IDFM:C01728',
  /**
   * RER E
   */
  E  = 'line:IDFM:C01729',
}

export enum IdLineMetro {
  /**
   * Métro 1
   */
  M1 = 'line:IDFM:C01371',
  /**
   * Métro 2
   */
  M2 = 'line:IDFM:C01372',
  /**
   * Métro 3
   */
  M3 = 'line:IDFM:C01373',
  /**
   * Métro 3bis
   */
  M3BIS = 'line:IDFM:C01386',
  /**
   * Métro 4
   */
  M4 = 'line:IDFM:C01374',
  /**
   * Métro 4
   */
  M5 = 'line:IDFM:C01375',
  /**
   * Métro 6
   */
  M6 = 'line:IDFM:C01376',
  /**
   * Métro 7
   */
  M7 = 'line:IDFM:C01377',
  /**
   * Métro 7bis
   */
  M7BIS = 'line:IDFM:C01387',
  /**
   * Métro 8
   */
  M8 = 'line:IDFM:C01378',
  /**
   * Métro 9
   */
  M9 = 'line:IDFM:C01379',
  /**
   * Métro 10
   */
  M10 = 'line:IDFM:C01380',
  /**
   * Métro 11
   */
  M11 = 'line:IDFM:C01381',
  /**
   * Métro 12
   */
  M12 = 'line:IDFM:C01382',
  /**
   * Métro 13
   */
  M13 = 'line:IDFM:C01383',
  /**
   * Métro 14
   */
  M14 = 'line:IDFM:C01384',
}


export type IdLine = IdLineRER | IdLineMetro;