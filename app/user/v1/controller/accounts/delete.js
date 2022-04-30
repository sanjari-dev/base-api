
export default async (req, res, next) => {

  /**
   * handle error response
   */
  try {
    
    const _ = sans.helpers.apps();

    if (req.params.account_id) {
      
      if (!parseInt(req.params.account_id)) {
        return sans.response.errorNotFound(res);
      }
      
      /**
       * response data
       */
      const data = {};

      /**
       * response success data
       */
      return sans.response.successData(res, data, "successfully deleted");
    }

    /**
     * response data
     */
    const data = {
      
    };

    /**
     * response success data
     */
    return sans.response.successData(res, data, "successfully deleted");
  } catch (err) {
    return sans.response.errorServer(res, err);
  }

}