
export default async (req, res, next) => {

  /**
   * handle error response
   */
  try {
    
    const _ = sans.helpers.apps();
    const group = await db.user.group.findByPk(req.params.group_id);

    // check group
    if (!group) {
      // response not found if not exist
      return sans.response.errorNotAuth(res, "user not available");
    }

    await db.user.group.update(
      {
        name: req.body.name,
        description: req.body.description
      },
      {
        where: {
          id: group.id
        }
      }
    );
    
    const group_update = await db.user.group.findByPk(group.id);

    /**
     * response data
     */
    const data = {
      group: _.schema.group(group_update)
    };

    /**
     * response success data
     */
    return sans.response.successData(res, data, "successfully changed");
  } catch (err) {
    return sans.response.errorServer(res, err);
  }

}