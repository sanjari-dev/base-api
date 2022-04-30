
export default async (req, res, next) => {

  /**
   * handle error response
   */
  try {
    
    const _ = sans.helpers.apps();

    if (req.params.group_id) {
      
      if (!parseInt(req.params.group_id)) {
        return sans.response.errorNotFound(res);
      }
      
      const group = await db.user.group.findByPk(req.params.group_id);

      if (!group) {
        return sans.response.errorNotFound(res);
      }

      /**
       * response data
       */
      const data = {
        group: _.schema.group(group)
      };

      /**
       * response success data
       */
      return sans.response.successData(res, data, "group");
    }


    const groups = await db.user.group.findAll();
    
    /**
     * response data
     */
    const data = {
      groups: _.schema.groups(groups)
    };

    /**
     * response success data
     */
    return sans.response.successData(res, data, "groups");
  } catch (err) {
    return sans.response.errorServer(res, err);
  }

}