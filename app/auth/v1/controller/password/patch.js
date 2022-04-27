
export default async (req, res, next) => {

  /**
   * handle error response
   */
  try {

    

    /**
     * response data
     */
    const data = {};

    /**
     * response success data
     */
    return sans.response.successData(res, data, "password changed successfully");
  } catch (err) {
    return sans.response.errorServer(res, err);
  }

}