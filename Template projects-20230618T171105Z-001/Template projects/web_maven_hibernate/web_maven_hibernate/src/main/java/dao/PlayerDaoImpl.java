package dao;

import static utils.HibernateUtils.getFactory;

import org.hibernate.Session;
import org.hibernate.Transaction;

import pojos.Player;
import pojos.Team;
public class PlayerDaoImpl implements PlayerDao{

	@Override
	public String addPlayer(Player p,Long teamId) {
		String msg = "";
		Session session = getFactory().getCurrentSession();
		Transaction tx = session.beginTransaction();
		try {
			Team team = session.get(Team.class, teamId);
			if(team!=null) {
			team.addPlayer(p);
			tx.commit();
			msg="Player Added";}
		}catch(RuntimeException r) {
			tx.rollback();
			msg = "Player not added";
		}
		return msg;
	}
 
}
