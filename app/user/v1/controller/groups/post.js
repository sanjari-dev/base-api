
export default async (req, res, next) => {

  /**
   * handle error response
   */
  try {
    
    const _ = sans.helpers.apps();

    // validate name
    if (!req.body.name) {
      return sans.response.errorBadRequest(res, "name is required");
    }

    let group = await db.user.group.add(
      {
        name: req.body.name,
        description: req.body.description,
        by: req.user.id,
        count: 0
      }
    );

    /**
     * response data
     */
    const data = {
      group: _.schema.group(group)
    };

    /**
     * response success data
     */
    return sans.response.successData(res, data, "successfully added");
  } catch (err) {
    return sans.response.errorServer(res, err);
  }

}